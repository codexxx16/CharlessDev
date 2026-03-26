"use client"
import { useForm } from "@tanstack/react-form"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldGroup } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { useCreateMessage } from "@/hooks/queries/message.query"

type MessageBoxProps = {
  user: null
}

export function MessageBox(_props: MessageBoxProps) {
  const t = useTranslations()

  const GuestbookFormSchema = z.object({
    message: z.string().min(1, t("error.message-cannot-be-empty")),
  })

  const form = useForm({
    defaultValues: {
      message: "",
    },
    validators: {
      onSubmit: GuestbookFormSchema,
    },
    onSubmit: ({ value }) => {
      if (isCreating) return
      createMessage({ message: value.message })
    },
  })

  const { mutate: createMessage, isPending: isCreating } = useCreateMessage(() => {
    form.reset()
    toast.success(t("success.message-created"))
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void form.handleSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <FieldGroup>
        <form.Field name="message">
          {(field) => {
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
                  placeholder={t("guestbook.placeholder")}
                  disabled={isCreating}
                  data-testid="guestbook-textarea"
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        </form.Field>
      </FieldGroup>
      <div className="flex items-center justify-end gap-2">
        <Button type="submit" disabled={isCreating} data-testid="guestbook-submit-button">
          {t("guestbook.submit")}
        </Button>
      </div>
    </form>
  )
}
