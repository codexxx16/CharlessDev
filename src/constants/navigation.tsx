import { SiGithub } from '@icons-pack/react-simple-icons'
import {
  BarChartIcon,
  FlameIcon,
  LayoutDashboardIcon,
  MailIcon,
  MessageCircleIcon,
  MessagesSquareIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
  UsersIcon,
} from 'lucide-react'

import { SITE_GITHUB_URL, SITE_EMAIL } from './site'

export const HEADER_LINKS = [
  {
    icon: <PencilIcon />,
    href: '/blog',
    labelKey: 'common.labels.blog',
  },
  {
    icon: <MessageCircleIcon />,
    href: '/guestbook',
    labelKey: 'common.labels.guestbook',
  },
  {
    icon: <BarChartIcon />,
    href: '/dashboard',
    labelKey: 'common.labels.dashboard',
  },
  {
    icon: <FlameIcon />,
    href: '/projects',
    labelKey: 'common.labels.projects',
  },
  {
    icon: <UserCircleIcon />,
    href: '/about',
    labelKey: 'common.labels.about',
  },
  {
    icon: <MonitorIcon />,
    href: '/uses',
    labelKey: 'common.labels.uses',
  },
] as const

export const FOOTER_GROUPS = [
  {
    links: [
      { href: '/', labelKey: 'common.labels.home' },
      { href: '/blog', labelKey: 'common.labels.blog' },
      { href: '/about', labelKey: 'common.labels.about' },
      { href: '/dashboard', labelKey: 'common.labels.dashboard' },
    ],
  },
  {
    links: [
      { href: '/guestbook', labelKey: 'common.labels.guestbook' },
      { href: '/uses', labelKey: 'common.labels.uses' },
      { href: '/projects', labelKey: 'common.labels.projects' },
    ],
  },
  {
    links: [
      { href: SITE_GITHUB_URL, labelKey: 'common.labels.github' },
      { href: `mailto:${SITE_EMAIL}`, labelKey: 'common.labels.email' },
    ],
  },
  {
    links: [
      { href: '/terms', labelKey: 'common.labels.terms' },
      { href: '/privacy', labelKey: 'common.labels.privacy' },
    ],
  },
] as const

export const ACCOUNT_SIDEBAR_LINKS = [
  {
    href: '/account',
    labelKey: 'common.labels.account',
  },
  {
    href: '/account/settings',
    labelKey: 'common.labels.settings',
  },
] as const

export const ADMIN_SIDEBAR_LINKS = [
  {
    titleKey: 'common.labels.general',
    links: [
      {
        titleKey: 'common.labels.dashboard',
        url: '/admin',
        icon: <LayoutDashboardIcon />,
      },
      {
        titleKey: 'common.labels.users',
        url: '/admin/users',
        icon: <UsersIcon />,
      },
      {
        titleKey: 'common.labels.comments',
        url: '/admin/comments',
        icon: <MessagesSquareIcon />,
      },
    ],
  },
] as const

export const SOCIAL_LINKS = [
  {
    href: SITE_GITHUB_URL,
    title: 'GitHub',
    icon: <SiGithub />,
  },
  {
    href: `mailto:${SITE_EMAIL}`,
    title: 'Email',
    icon: <MailIcon />,
  },

] as const
