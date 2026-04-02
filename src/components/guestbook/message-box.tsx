'use client'

import { useForm } from '@tanstack/react-form'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useCreateMessage } from '@/hooks/queries/message.query'

export function MessageBox() {
  const t = useTranslations()

  const GuestbookFormSchema = z.object({
    name: z.string().min(1, t('error.name-cannot-be-empty')),
    message: z.string().min(1, t('error.message-cannot-be-empty')),
  })

  const form = useForm({
    defaultValues: {
      name: '',
      message: '',
    },
    validators: {
      onSubmit: GuestbookFormSchema,
    },
    onSubmit: ({ value }) => {
      if (isCreating) return
      createMessage({ message: value.message, name: value.name })
    },
  })

  const { mutate: createMessage, isPending: isCreating } = useCreateMessage(() => {
    form.reset()
    toast.success(t('success.message-created'))
  })

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    void form.handleSubmit()
  }

  return (
    <div className='flex flex-col gap-4 rounded-xl border p-4 bg-accent/5'>
      <form onSubmit={handleSubmit} className='w-full space-y-4'>
        <FieldGroup>
          <form.Field name='name'>
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

              return (
                <Field data-invalid={isInvalid}>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => {
                      field.handleChange(e.target.value)
                    }}
                    aria-invalid={isInvalid}
                    placeholder="Your Name"
                    disabled={isCreating}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }}
          </form.Field>
          <form.Field name='message'>
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

              return (
                <Field data-invalid={isInvalid}>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => {
                      field.handleChange(e.target.value)
                    }}
                    aria-invalid={isInvalid}
                    placeholder={t('guestbook.placeholder')}
                    disabled={isCreating}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }}
          </form.Field>
        </FieldGroup>
        <div className='flex items-center justify-end gap-2'>
          <Button type='submit' disabled={isCreating}>
            {t('guestbook.submit')}
          </Button>
        </div>
      </form>
    </div>
  )
}
