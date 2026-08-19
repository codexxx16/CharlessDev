// Based on delbaoliveira/website
// Copyright (c) Delba de Oliveira
// Source: https://github.com/delbaoliveira/website/blob/59e6f181ad75751342ceaa8931db4cbcef86b018/ui/BlurImage.tsx
//
// Modified by: Charless Netumbare
'use client'

import NextImage from 'next/image'
import { useState } from 'react'

import { cn } from '@/utils/cn'

type ImageProps = {
  imageClassName?: string
  lazy?: boolean
  fallback?: React.ReactNode
} & React.ComponentProps<typeof NextImage>

export function BlurImage(props: ImageProps) {
  const { alt, src, className, imageClassName, lazy = true, fallback, ...rest } = props
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={cn('group overflow-hidden', className)} role='img' aria-label={alt}>
        {fallback ?? (
          <span className='flex aspect-[1200/630] items-center justify-center bg-muted text-sm text-muted-foreground'>
            Image unavailable
          </span>
        )}
      </div>
    )
  }

  return (
    <div data-loading={isLoading} className={cn('group overflow-hidden data-[loading=true]:animate-pulse', className)}>
      <NextImage
        className={cn(
          'group-data-[loading=true]:scale-[1.02] group-data-[loading=true]:blur-xl group-data-[loading=true]:grayscale',
          imageClassName,
        )}
        style={{
          transition: 'filter 700ms ease, scale 150ms ease',
        }}
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : undefined}
        priority={!lazy}
        quality={100}
        onLoad={() => {
          setIsLoading(false)
        }}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
        {...rest}
      />
    </div>
  )
}
