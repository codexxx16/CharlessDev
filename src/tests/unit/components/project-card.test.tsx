import type { ComponentProps } from 'react'
import { screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import { ProjectCard } from '@/components/project-card'
import { render } from '@/utils/render'

vi.mock('next/image', () => ({
  default: (props: ComponentProps<'img'> & { fill?: boolean; priority?: boolean; quality?: number }) => {
    const { fill: _fill, priority: _priority, quality: _quality, ...imageProps } = props
    return <img {...imageProps} />
  },
}))

type ProjectCardProject = NonNullable<Parameters<typeof ProjectCard>[0]['project']>

const baseProject: ProjectCardProject = {
  _meta: {} as ProjectCardProject['_meta'],
  content: '',
  code: '',
  locale: 'en',
  slug: 'sample-project',
  toc: [],
  name: 'Sample Project',
  description: 'A sample project for image rendering tests.',
  homepage: 'https://example.com',
  github: 'https://github.com/example/sample-project',
  techstack: ['Next.js'],
  selected: false,
  dateCreated: '2026-01-01T00:00:00Z',
  image: '/images/projects/sample-project/cover.svg',
}

describe('<ProjectCard />', () => {
  test('renders the project image with its configured source and accessible alt text', () => {
    render(<ProjectCard project={baseProject} />)

    const image = screen.getByRole('img', { name: baseProject.description })

    expect(image).toHaveAttribute('src', baseProject.image)
    expect(image).toHaveAttribute('alt', baseProject.description)
  })

  test('renders initials when a project image is not configured', () => {
    const projectWithoutImage = { ...baseProject, image: undefined }

    render(<ProjectCard project={projectWithoutImage} />)

    const fallback = screen.getByRole('img', { name: projectWithoutImage.description })

    expect(fallback).toHaveTextContent('SP')
    expect(fallback).toHaveAccessibleName(projectWithoutImage.description)
  })
})
