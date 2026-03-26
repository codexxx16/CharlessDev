"use client"
import { ClockIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function CodingHours() {
  const t = useTranslations()
  return (
    <div className="flex flex-col gap-6 rounded-2xl p-4 shadow-feature-card lg:p-6">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-4.5" />
        <h2 className="text-sm">{t("homepage.about-me.coding-hours")}</h2>
      </div>
      <div className="flex grow items-center justify-center text-4xl font-semibold">
        6,264 hrs
      </div>
    </div>
  )
}
