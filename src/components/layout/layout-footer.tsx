'use client'

import { useTranslations } from 'next-intl'

import { Link } from '@/components/ui/link'
import { FOOTER_GROUPS } from '@/constants/navigation'

export function LayoutFooter() {
  const t = useTranslations()

  return (
    <footer className='mx-auto mb-12 w-full max-w-5xl rounded-2xl bg-background/30 p-8 backdrop-blur-md'>
      <div className='mb-12 grid grid-cols-2 gap-10 sm:grid-cols-3'>
        {FOOTER_GROUPS.map((group, index) => (
          <div key={index} className='flex flex-col items-start gap-4'>
            {group.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className='mt-8 space-y-4'>
        <div className='flex items-center justify-between text-sm'>
          {/* oxlint-disable-next-line react-x/purity */}
          <div className='text-muted-foreground'>&copy; {new Date().getFullYear()} Charless Netumbare</div>
        </div>
      </div>
    </footer>
  )
}
