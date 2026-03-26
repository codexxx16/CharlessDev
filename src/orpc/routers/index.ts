import { githubRouter } from './github.router'
import { likeRouter } from './like.router'
import { messageRouter } from './message.router'
import { viewRouter } from './view.router'

export const router = {
  github: githubRouter,
  view: viewRouter,
  like: likeRouter,
  message: messageRouter,
}

export type Router = typeof router
