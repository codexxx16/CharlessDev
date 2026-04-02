import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'

export function useListMessages() {
  return useInfiniteQuery({
    queryKey: ['guestbook-messages'],
    queryFn: async ({ pageParam }: { pageParam: string | null }) => {
      let query = supabase
        .from('guestbook_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10)

      if (pageParam) {
        query = query.lt('created_at', pageParam)
      }

      const { data, error } = await query

      if (error) throw error

      return {
        messages: data.map((m) => ({
          id: m.id,
          body: m.body,
          createdAt: m.created_at,
          user: {
            id: m.user_id,
            name: m.user_name,
            image: m.user_image,
          },
        })),
        nextCursor: data.length === 10 ? data[data.length - 1].created_at : null,
      }
    },
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  })
}

export function useCreateMessage(onSuccess?: () => void) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ message, name, image }: { message: string; name: string; image?: string }) => {
      const { data, error } = await supabase
        .from('guestbook_messages')
        .insert([
          {
            body: message,
            user_name: name,
            user_image: image || `https://avatar.vercel.sh/${name}.png`,
          },
        ])
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['guestbook-messages'] })
      onSuccess?.()
    },
  })
}

export function useDeleteMessage(onSuccess?: () => void) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      const { error } = await supabase.from('guestbook_messages').delete().eq('id', id)
      if (error) throw error
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['guestbook-messages'] })
      onSuccess?.()
    },
  })
}
