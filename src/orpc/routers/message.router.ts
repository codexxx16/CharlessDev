import { ORPCError } from "@orpc/client"
import { supabase } from "@/lib/supabase"
import { publicProcedure } from "../procedures"
import { EmptyOutputSchema } from "../schemas/common.schema"
import {
  CreateMessageInputSchema,
  CreateMessageOutputSchema,
  DeleteMessageInputSchema,
  ListMessagesInputSchema,
  ListMessagesOutputSchema,
} from "../schemas/message.schema"

const listMessages = publicProcedure
  .input(ListMessagesInputSchema)
  .output(ListMessagesOutputSchema)
  .handler(async ({ input }) => {
    let query = supabase
      .from("guestbook_messages")
      .select("id, body, created_at, user_id, user_name, user_image")
      .order("created_at", { ascending: false })
      .limit(input.limit)

    if (input.cursor) {
      query = query.lt("created_at", input.cursor)
    }

    const { data, error } = await query

    if (error) throw new ORPCError("INTERNAL_SERVER_ERROR", { message: error.message })

    const result = (data ?? []).map((row) => ({
      id: row.id as string,
      body: row.body as string,
      createdAt: row.created_at as string,
      userId: row.user_id as string,
      user: {
        id: row.user_id as string,
        name: row.user_name as string,
        image: row.user_image as string | null,
      },
    }))

    return {
      messages: result,
      nextCursor: result.length >= input.limit ? result.at(-1)?.createdAt : undefined,
    }
  })

const createMessage = publicProcedure
  .input(CreateMessageInputSchema)
  .output(CreateMessageOutputSchema)
  .handler(async ({ input }) => {
    const { data, error } = await supabase
      .from("guestbook_messages")
      .insert({
        body: input.message,
        user_id: "anonymous",
        user_name: "Anonymous",
        user_image: null,
      })
      .select()
      .single()

    if (error) throw new ORPCError("INTERNAL_SERVER_ERROR", { message: error.message })
    return {
      id: data.id,
      body: data.body,
      createdAt: data.created_at,
      userId: data.user_id,
    }
  })

const deleteMessage = publicProcedure
  .input(DeleteMessageInputSchema)
  .output(EmptyOutputSchema)
  .handler(async ({ input }) => {
    const { error } = await supabase
      .from("guestbook_messages")
      .delete()
      .eq("id", input.id)

    if (error) throw new ORPCError("INTERNAL_SERVER_ERROR", { message: error.message })
  })

export const messageRouter = {
  list: listMessages,
  create: createMessage,
  delete: deleteMessage,
}
