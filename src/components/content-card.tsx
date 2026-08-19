import { ArrowUpRightIcon } from 'lucide-react'

import { BlurImage } from './blur-image'
import { Link } from './ui/link'

type ContentCardProps = {
  href: string
  title: string
  image?: string
  imageAlt: string
  imageFallback?: React.ReactNode
  icon?: React.ReactNode
  featured?: boolean
  lazy?: boolean
  children?: React.ReactNode
}

export function ContentCard(props: ContentCardProps) {
  const { href, title, image, imageAlt, imageFallback, icon, featured = false, lazy = true, children } = props

  return (
    <Link href={href} className='group rounded-2xl p-2 shadow-feature-card'>
      {featured && (
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center gap-3'>
            {icon}
            <h2>{title}</h2>
          </div>
          <ArrowUpRightIcon className='size-4.5 opacity-0 transition-opacity group-hover:opacity-100' />
        </div>
      )}
      {image ? (
        <BlurImage
          width={1200}
          height={630}
          src={image}
          alt={imageAlt}
          className='rounded-lg'
          lazy={lazy}
          fallback={imageFallback}
        />
      ) : (
        <div className='rounded-lg' role='img' aria-label={imageAlt}>
          {imageFallback ?? (
            <span className='flex aspect-[1200/630] items-center justify-center bg-muted text-sm text-muted-foreground'>
              Image unavailable
            </span>
          )}
        </div>
      )}
      {children}
    </Link>
  )
}
