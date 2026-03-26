"use client"
import { MessageBox } from './message-box'
import { Messages } from './messages'
import { Pinned } from './pinned'

export function MessageBoard() {
  return (
    <div className="mx-auto max-w-xl space-y-10">
      <Pinned />
      <MessageBox user={null} />
      <Messages />
    </div>
  )
}
