export const SITE_GITHUB_URL = 'https://github.com/codexxx16'
export const SITE_FACEBOOK_URL = ''
export const SITE_INSTAGRAM_URL = ''
export const SITE_X_URL = ''
export const SITE_YOUTUBE_URL = ''

export const GITHUB_USERNAME = 'codexxx16'

export const MY_NAME = 'Charless Netumbare'
export const SITE_NAME = 'CharlessDev'
export const SITE_URL = 'https://charless-dev.vercel.app'
export const SITE_DESCRIPTION = 'Full Stack Developer and AI Engineer from Masvingo, Zimbabwe'
export const SITE_EMAIL = 'codexxxnull@gmail.com'

export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const OG_IMAGE_TYPE = 'image/png'

export const AVATAR_MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
export const SUPPORTED_AVATAR_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const

export type AvatarMimeType = (typeof SUPPORTED_AVATAR_MIME_TYPES)[number]
