import type { NextRequest } from 'next/server'

export async function createORPCContext(request: NextRequest) {
  return {
    session: null,
    headers: request.headers,
  }
}

export type Context = Awaited<ReturnType<typeof createORPCContext>>
