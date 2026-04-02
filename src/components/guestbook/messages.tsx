'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { useFormattedDate } from '@/hooks/use-formatted-date'
import { useListMessages } from '@/hooks/queries/message.query'
import { UserAvatar } from '@/components/ui/user-avatar'

import { MessagesLoader } from './messages-loader'

export function Messages() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useListMessages()
  const { ref, inView } = useInView()
  const t = useTranslations()

  useEffect(() => {
    if (inView && hasNextPage) {
      void fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  if (status === 'pending') {
    return <MessagesLoader />
  }

  if (status === 'error') {
    return <div className='text-center text-muted-foreground'>{t('error.failed-to-load-messages')}</div>
  }

  const messages = data?.pages.flatMap((page) => page.messages) ?? []

  if (messages.length === 0) {
    return <div className='text-center text-muted-foreground'>{t('guestbook.no-messages')}</div>
  }

  return (
    <div className='space-y-8'>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <div ref={ref}>{isFetchingNextPage && <MessagesLoader />}</div>
    </div>
  )
}

function MessageItem({ message }: { message: any }) {
  const date = useFormattedDate(message.createdAt, { formatName: 'long' })

  return (
    <div className='flex gap-3 rounded-xl border p-4'>
      <UserAvatar id={message.user.id} name={message.user.name} image={message.user.image} size='lg' />
      <div className='flex w-full flex-col gap-1'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='text-sm font-semibold'>{message.user.name}</div>
            <div className='text-xs text-muted-foreground'>{date ?? '--'}</div>
          </div>
        </div>
        <div className='break-words text-sm text-muted-foreground'>{message.body}</div>
      </div>
    </div>
  )
}
