import { LightbulbIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { ContentCard } from './content-card'

type ProjectCardProps = {
  project: Project
  featured?: boolean
  lazy?: boolean
}

export function ProjectCard(props: ProjectCardProps) {
  const { project, featured = false, lazy = true } = props
  const t = useTranslations()
  const initials = project.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (
    <ContentCard
      key={project.slug}
      href={`/projects/${project.slug}`}
      title={t('homepage.selected-projects.card')}
      image={project.image}
      imageAlt={project.description || project.name}
      imageFallback={
        <div className='flex aspect-[1200/630] items-center justify-center bg-muted text-4xl font-semibold text-muted-foreground'>
          <span aria-hidden='true'>{initials || '?'}</span>
          <span className='sr-only'>{project.name} thumbnail unavailable</span>
        </div>
      }
      icon={<LightbulbIcon className='size-4.5' />}
      featured={featured}
      lazy={lazy}
    >
      <div className='flex flex-col px-2 py-4 transition-transform ease-out group-hover:translate-x-0.5'>
        <h3 className='text-2xl font-semibold'>{project.name}</h3>
        <p className='mt-2 text-muted-foreground'>{project.description}</p>
      </div>
    </ContentCard>
  )
}
