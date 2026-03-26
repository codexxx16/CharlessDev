export const SITE_GITHUB_URL = 'https://github.com/codexxx16'
export const SITE_LINKEDIN_URL = 'https://linkedin.com' // placeholder, to be added later
export const SITE_X_URL = 'https://x.com/CharlessDev' // placeholder
export const SITE_YOUTUBE_URL = 'https://www.youtube.com/@CharlessDev' // placeholder

export const GITHUB_USERNAME = 'codexxx16'

export const MY_NAME = 'Charless Netumbare'
export const MY_EMAIL = 'codexxxnull@gmail.com'
export const MY_HANDLE = 'CharlessDev'
export const MY_TAGLINE =
  'Building secure fintech solutions, exploring AI, and bridging the gap between physical discipline and digital innovation.'

export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const OG_IMAGE_TYPE = 'image/png'

export const AVATAR_MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
export const SUPPORTED_AVATAR_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const

export type AvatarMimeType = (typeof SUPPORTED_AVATAR_MIME_TYPES)[number]
