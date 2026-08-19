"use client";

import { useForm } from "@tanstack/react-form";
import { useTranslations } from "next-intl";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_EMAIL } from "@/constants/site";

export function MessageBox() {
  const t = useTranslations();

  const GuestbookFormSchema = z.object({
    name: z.string().min(1, t("error.name-cannot-be-empty")),
    message: z.string().min(1, t("error.message-cannot-be-empty")),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      message: "",
    },
    validators: {
      onSubmit: GuestbookFormSchema,
    },
    onSubmit: ({ value }) => {
      const subject = `Guestbook message from ${value.name.trim()}`;
      const body = [
        "Hello Charless,",
        "",
        `${value.name.trim()} left a message on your guestbook:`,
        "",
        "---",
        value.message.trim(),
        "---",
        "",
        "Sent from https://charless-dev.vercel.app/guestbook",
      ].join("\n");

      window.location.assign(
        `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      );
    },
  });

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    void form.handleSubmit();
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-accent/5 p-4">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <FieldGroup>
          <form.Field name="name">
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    aria-invalid={isInvalid}
                    placeholder="Your Name"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="message">
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    aria-invalid={isInvalid}
                    placeholder={t("guestbook.placeholder")}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
        </FieldGroup>
        <div className="flex items-center justify-end gap-2">
          <Button type="submit">{t("guestbook.submit")}</Button>
        </div>
      </form>
    </div>
  );
}
