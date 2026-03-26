'use client'

import {
  SiFigma,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from '@icons-pack/react-simple-icons'
import { DatabaseIcon, ZapIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Marquee } from '@/components/ui/marquee'

export function StacksCard() {
  const t = useTranslations()

  return (
    <div className='flex h-60 flex-col gap-2 overflow-hidden rounded-2xl p-4 shadow-feature-card lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-4.5' />
        <h2 className='text-sm'>{t('homepage.about-me.stacks')}</h2>
      </div>
      <Marquee gap='20px' className='py-4'>
        <SiPython className='size-10' />
        <SiJavascript className='size-10' />
        <SiTypescript className='size-10' />
        <SiNextdotjs className='size-10' />
        <SiReact className='size-10' />
        <SiTailwindcss className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse>
        <DatabaseIcon className='size-10' />
        <SiPostgresql className='size-10' />
        <SiNodedotjs className='size-10' />
        <SiFigma className='size-10' />
        <SiGit className='size-10' />
      </Marquee>
    </div>
  )
}
