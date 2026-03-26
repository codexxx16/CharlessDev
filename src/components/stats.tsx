// Dashboard stats for CharlessDev
"use client"

import { SiGithub, SiNetflix, SiSpotify, SiYoutube } from "@icons-pack/react-simple-icons"
import { ArrowRightIcon, CodeIcon, GamepadIcon, PencilIcon } from "lucide-react"
import { useTranslations } from "next-intl"

import { Counter } from "@/components/counter"
import { Link } from "@/components/ui/link"
import { useGithubStats, useLikeStats, useViewStats } from "@/hooks/queries/stats.query"

type Card = {
  icon: React.ReactNode
  title: string
  link: string
  value: number | undefined
  linkText: string
  gradient: {
    startColor: string
    endColor: string
  }
  suffix?: string
}

export function Stats() {
  const githubQuery = useGithubStats()
  const likesQuery = useLikeStats()
  const viewsQuery = useViewStats()
  const t = useTranslations()

  const data: Card[] = [
    {
      title: t("dashboard.stat.coding-hours"),
      link: "https://github.com/codexxx16",
      value: 6264,
      icon: <CodeIcon className="size-6 text-white" />,
      linkText: "GitHub",
      gradient: { startColor: "#00c6ff", endColor: "#0072ff" },
      suffix: "hrs",
    },
    {
      title: t("dashboard.stat.hours-gaming"),
      link: "#",
      value: 34,
      icon: <GamepadIcon className="size-6 text-white" />,
      linkText: "Gaming",
      gradient: { startColor: "#f7971e", endColor: "#ffd200" },
      suffix: "hrs",
    },
    {
      title: t("dashboard.stat.hours-spotify"),
      link: "https://open.spotify.com",
      value: 1257,
      icon: <SiSpotify className="text-[#1DB954]" />,
      linkText: "Spotify",
      gradient: { startColor: "#1DB954", endColor: "#1ed760" },
      suffix: "hrs",
    },
    {
      title: t("dashboard.stat.hours-netflix"),
      link: "https://netflix.com",
      value: 300,
      icon: <SiNetflix className="text-[#E50914]" />,
      linkText: "Netflix",
      gradient: { startColor: "#E50914", endColor: "#b20710" },
      suffix: "hrs",
    },
    {
      title: t("dashboard.stat.youtube-subscribers"),
      link: "https://www.youtube.com/@CharlessDev",
      value: 0,
      icon: <SiYoutube className="text-[#FF0000]" />,
      linkText: "YouTube",
      gradient: { startColor: "#FF0000", endColor: "#ca1a1a" },
    },
    {
      title: t("dashboard.stat.youtube-views"),
      link: "https://www.youtube.com/@CharlessDev",
      value: 0,
      icon: <SiYoutube className="text-[#FF0000]" />,
      linkText: "YouTube",
      gradient: { startColor: "#FF0000", endColor: "#ca1a1a" },
    },
    {
      title: t("dashboard.stat.github-followers"),
      link: "https://github.com/codexxx16",
      value: githubQuery.data?.followers,
      icon: <SiGithub className="text-white" />,
      linkText: "GitHub",
      gradient: { startColor: "#6e5494", endColor: "#24292e" },
    },
    {
      title: t("dashboard.stat.github-projects"),
      link: "https://github.com/codexxx16",
      value: githubQuery.data?.publicRepos,
      icon: <SiGithub className="text-white" />,
      linkText: "GitHub",
      gradient: { startColor: "#6e5494", endColor: "#24292e" },
    },
    {
      title: t("dashboard.stat.blog-total-views"),
      link: "/",
      value: viewsQuery.data?.views,
      icon: <PencilIcon className="size-6 text-[#ff0f7b]" />,
      linkText: "Blog",
      gradient: { startColor: "#ff0f7b", endColor: "#f945ff" },
    },
    {
      title: t("dashboard.stat.blog-total-likes"),
      link: "/",
      value: likesQuery.data?.likes,
      icon: <PencilIcon className="size-6 text-[#ff0f7b]" />,
      linkText: "Blog",
      gradient: { startColor: "#ff0f7b", endColor: "#f945ff" },
    },
  ]

  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {data.map((stat) => {
        const { icon, link, title, value, linkText, gradient: { startColor, endColor }, suffix } = stat
        const hasValue = value === 0 || value !== undefined
        return (
          <Link
            key={stat.title}
            href={link}
            className="group relative overflow-hidden rounded-xl border p-4 transition-colors hover:bg-accent"
          >
            <div className="flex flex-col items-center justify-center gap-2 transition-transform group-hover:-translate-y-24 group-focus:-translate-y-24">
              <div className="flex items-center gap-2 text-3xl font-semibold">
                {hasValue ? (
                  <>
                    <span>{icon}</span>
                    <div style={{ background: "linear-gradient(122.25deg, " + startColor + " 12.16%, " + endColor + " 70.98%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      <Counter value={value} />
                      {suffix && <span>{" " + suffix}</span>}
                    </div>
                  </>
                ) : "--"}
              </div>
              <div className="text-xl font-semibold">{title}</div>
            </div>
            <span className="absolute top-1/2 left-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-2xl font-semibold opacity-0 transition group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
              {linkText}
              <ArrowRightIcon className="size-6" />
            </span>
          </Link>
        )
      })}
    </div>
  )
}
