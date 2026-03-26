import type { GithubStatsGetOutput } from './client'

// Simple in-memory cache to replace Redis/Upstash
function createMemoryCache<T>(ttlSeconds = 3600) {
  const store = new Map<string, { value: T; expiresAt: number }>()

  return {
    async get(key: string): Promise<T | null> {
      const entry = store.get(key)
      if (!entry) return null
      if (Date.now() > entry.expiresAt) {
        store.delete(key)
        return null
      }
      return entry.value
    },
    async set(key: string, value: T): Promise<void> {
      store.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 })
    },
    async del(key: string): Promise<void> {
      store.delete(key)
    },
  }
}

const GITHUB_STATS_CACHE_TTL = 60 * 60 // 1 hour

export const cache = {
  github: createMemoryCache<GithubStatsGetOutput>(GITHUB_STATS_CACHE_TTL),
}
