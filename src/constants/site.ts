export const SITE_GITHUB_URL = 'https://github.com/codexxx16'
export const SITE_FACEBOOK_URL = 'https://www.facebook.com/codexxx16'
export const SITE_INSTAGRAM_URL = 'https://www.instagram.com/codexxx16'
export const SITE_X_URL = 'https://x.com/codexxx16'
export const SITE_YOUTUBE_URL = 'https://www.youtube.com/@codexxx16'

export const GITHUB_USERNAME = 'codexxx16'

export const MY_NAME = 'Charless Netumbare'

export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const OG_IMAGE_TYPE = 'image/png'

export const AVATAR_MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
export const SUPPORTED_AVATAR_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const

export type AvatarMimeType = (typeof SUPPORTED_AVATAR_MIME_TYPES)[number]
