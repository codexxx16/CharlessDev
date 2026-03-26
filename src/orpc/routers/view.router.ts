import { getBlogViews, getTotalBlogViews, incrementBlogView } from '@/lib/supabase'
import { publicProcedure } from '../procedures'
import { ViewsStatsOutputSchema } from '../schemas/blog.schema'
import {
  CountViewInputSchema,
  CountViewOutputSchema,
  IncrementViewInputSchema,
  IncrementViewOutputSchema,
} from '../schemas/view.schema'

const countView = publicProcedure
  .input(CountViewInputSchema)
  .output(CountViewOutputSchema)
  .handler(async ({ input }) => {
    const views = await getBlogViews(input.slug)
    return { views }
  })

const incrementView = publicProcedure
  .input(IncrementViewInputSchema)
  .output(IncrementViewOutputSchema)
  .handler(async ({ input }) => {
    const views = await incrementBlogView(input.slug)
    return { views }
  })

const getStats = publicProcedure.output(ViewsStatsOutputSchema).handler(async () => {
  const views = await getTotalBlogViews()
  return { views }
})

export const viewRouter = {
  count: countView,
  increment: incrementView,
  stats: getStats,
}
