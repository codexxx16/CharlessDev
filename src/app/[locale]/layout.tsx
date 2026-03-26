import "@/styles/globals.css"
import type { Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { Analytics } from "@/components/analytics"
import { Hello } from "@/components/hello"
import { Providers } from "@/components/providers"
import { routing } from "@/i18n/routing"
import { cn } from "@/utils/cn"

export function generateStaticParams(): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default async function Layout(props: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { children, params } = props
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={cn(geistSans.variable, geistMono.variable)}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <NuqsAdapter>
          <Providers>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Hello />
              {children}
              <Analytics />
            </NextIntlClientProvider>
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  )
}
