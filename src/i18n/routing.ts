import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en'] as const,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false,
  localeCookie: {
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 365,
  },
})

type Locale = (typeof routing.locales)[number]
type LocaleItem = {
  label: string
  value: Locale
}

export const LOCALE_ITEMS: LocaleItem[] = [
  { label: 'English', value: 'en' },
]

export const { Link, usePathname, useRouter, redirect } = createNavigation(routing)
