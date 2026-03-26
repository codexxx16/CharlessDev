import { SiGithub, SiLinkedin, SiX, SiYoutube } from '@icons-pack/react-simple-icons'
import {
  BarChartIcon,
  FlameIcon,
  MessageCircleIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
} from 'lucide-react'

import { SITE_GITHUB_URL, SITE_LINKEDIN_URL, SITE_X_URL, SITE_YOUTUBE_URL } from './site'

export const HEADER_LINKS = [
  {
    icon: <PencilIcon />,
    href: '/blog',
    // i18n-check t('common.labels.blog')
    labelKey: 'common.labels.blog',
  },
  {
    icon: <MessageCircleIcon />,
    href: '/guestbook',
    // i18n-check t('common.labels.guestbook')
    labelKey: 'common.labels.guestbook',
  },
  {
    icon: <BarChartIcon />,
    href: '/dashboard',
    // i18n-check t('common.labels.dashboard')
    labelKey: 'common.labels.dashboard',
  },
  {
    icon: <FlameIcon />,
    href: '/projects',
    // i18n-check t('common.labels.projects')
    labelKey: 'common.labels.projects',
  },
  {
    icon: <UserCircleIcon />,
    href: '/about',
    // i18n-check t('common.labels.about')
    labelKey: 'common.labels.about',
  },
  {
    icon: <MonitorIcon />,
    href: '/uses',
    // i18n-check t('common.labels.uses')
    labelKey: 'common.labels.uses',
  },
] as const

export const FOOTER_GROUPS = [
  {
    links: [
      // i18n-check t('common.labels.home')
      { href: '/', labelKey: 'common.labels.home' },
      // i18n-check t('common.labels.blog')
      { href: '/blog', labelKey: 'common.labels.blog' },
      // i18n-check t('common.labels.about')
      { href: '/about', labelKey: 'common.labels.about' },
      // i18n-check t('common.labels.dashboard')
      { href: '/dashboard', labelKey: 'common.labels.dashboard' },
    ],
  },
  {
    links: [
      // i18n-check t('common.labels.guestbook')
      { href: '/guestbook', labelKey: 'common.labels.guestbook' },
      // i18n-check t('common.labels.uses')
      { href: '/uses', labelKey: 'common.labels.uses' },
      // i18n-check t('common.labels.projects')
      { href: '/projects', labelKey: 'common.labels.projects' },
    ],
  },
  {
    links: [
      // i18n-check t('common.labels.github')
      { href: SITE_GITHUB_URL, labelKey: 'common.labels.github' },
      // i18n-check t('common.labels.linkedin')
      { href: SITE_LINKEDIN_URL, labelKey: 'common.labels.linkedin' },
      // i18n-check t('common.labels.youtube')
      { href: SITE_YOUTUBE_URL, labelKey: 'common.labels.youtube' },
    ],
  },
  {
    links: [
      // i18n-check t('common.labels.terms')
      { href: '/terms', labelKey: 'common.labels.terms' },
      // i18n-check t('common.labels.privacy')
      { href: '/privacy', labelKey: 'common.labels.privacy' },
    ],
  },
] as const



export const SOCIAL_LINKS = [
  {
    href: SITE_GITHUB_URL,
    title: 'GitHub',
    icon: <GithubIcon className="size-4" />,
  },
  {
    href: SITE_LINKEDIN_URL,
    title: 'LinkedIn',
    icon: <LinkedinIcon className="size-4" />,
  },
  {
    href: SITE_X_URL,
    title: 'X',
    icon: <TwitterIcon className="size-4" />,
  },
  {
    href: SITE_YOUTUBE_URL,
    title: 'YouTube',
    icon: <YoutubeIcon className="size-4" />,
  },
] as const
