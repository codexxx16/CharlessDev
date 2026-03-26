import type { Context } from './context'
import { ORPCError } from '@orpc/client'
import { os } from '@orpc/server'
import { IS_PRODUCTION } from '@/constants/common'
import { sleep } from '@/utils/sleep'

const base = os.$context<Context>()

const delayMiddleware = base.middleware(async ({ context, next }) => {
  if (!IS_PRODUCTION) {
    await sleep(200)
  }
  return next({ context })
})

const authMiddleware = base.middleware(async ({ context, next }) => {
  if (!context.session) {
    throw new ORPCError('UNAUTHORIZED')
  }
  return next({
    context: {
      session: context.session,
    },
  })
})

export const publicProcedure = base.use(delayMiddleware)
export const protectedProcedure = publicProcedure.use(authMiddleware)
export const adminProcedure = protectedProcedure
