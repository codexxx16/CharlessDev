import { addBlogLike, getBlogLikes, getTotalBlogLikes, hasUserLiked, removeBlogLike } from '@/lib/supabase'
import { getIp } from '@/utils/get-ip'
import { publicProcedure } from '../procedures'
import { LikesStatsOutputSchema } from '../schemas/blog.schema'
import {
  CountLikeInputSchema,
  CountLikeOutputSchema,
  IncrementLikeInputSchema,
  IncrementLikeOutputSchema,
} from '../schemas/like.schema'

function getUserIdentifier(headers: Headers): string {
  const ip = getIp(headers)
  return ip ?? 'anonymous'
}

const countLike = publicProcedure
  .input(CountLikeInputSchema)
  .output(CountLikeOutputSchema)
  .handler(async ({ input, context }) => {
    const likes = await getBlogLikes(input.slug)
    const userIdentifier = getUserIdentifier(context.headers)
    const userLiked = await hasUserLiked(input.slug, userIdentifier)
    return {
      likes,
      currentUserLikes: userLiked ? 1 : 0,
    }
  })

const incrementLike = publicProcedure
  .input(IncrementLikeInputSchema)
  .output(IncrementLikeOutputSchema)
  .handler(async ({ input, context }) => {
    const userIdentifier = getUserIdentifier(context.headers)
    const alreadyLiked = await hasUserLiked(input.slug, userIdentifier)
    if (alreadyLiked) {
      await removeBlogLike(input.slug, userIdentifier)
    } else {
      await addBlogLike(input.slug, userIdentifier)
    }
    const likes = await getBlogLikes(input.slug)
    const nowLiked = await hasUserLiked(input.slug, userIdentifier)
    return {
      likes,
      currentUserLikes: nowLiked ? 1 : 0,
    }
  })

const getStats = publicProcedure.output(LikesStatsOutputSchema).handler(async () => {
  const likes = await getTotalBlogLikes()
  return { likes }
})

export const likeRouter = {
  count: countLike,
  increment: incrementLike,
  stats: getStats,
}
