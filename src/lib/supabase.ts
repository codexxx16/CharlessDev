// Supabase client-like interface for use in ORPC routers
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''

type QueryBuilder = {
  select: (cols?: string) => QueryBuilder
  insert: (data: Record<string, unknown>) => QueryBuilder
  update: (data: Record<string, unknown>) => QueryBuilder
  delete: () => QueryBuilder
  eq: (col: string, val: unknown) => QueryBuilder
  lt: (col: string, val: unknown) => QueryBuilder
  order: (col: string, opts?: { ascending?: boolean }) => QueryBuilder
  limit: (n: number) => QueryBuilder
  single: () => Promise<{ data: Record<string, unknown> | null; error: { message: string } | null }>
  then: (resolve: (val: { data: unknown[] | null; error: { message: string } | null }) => void) => Promise<void>
}

function buildQuery(table: string, method: string, useService = true): QueryBuilder {
  const key = useService ? SUPABASE_SERVICE_KEY : SUPABASE_ANON_KEY
  const state: {
    filters: string[]
    orderBy?: string
    orderAsc?: boolean
    limitN?: number
    selectCols: string
    body?: Record<string, unknown>
    single?: boolean
  } = { filters: [], selectCols: '*' }

  async function execute(isSingle = false): Promise<{ data: unknown; error: { message: string } | null }> {
    if (!SUPABASE_URL) return { data: isSingle ? null : [], error: { message: 'Supabase not configured' } }
    let url = `${SUPABASE_URL}/rest/v1/${table}`
    const params: string[] = []
    if (state.selectCols) params.push(`select=${encodeURIComponent(state.selectCols)}`)
    for (const f of state.filters) params.push(f)
    if (state.orderBy) params.push(`order=${state.orderBy}.${state.orderAsc ? 'asc' : 'desc'}`)
    if (state.limitN) params.push(`limit=${state.limitN}`)
    if (params.length) url += '?' + params.join('&')
    const headers: Record<string, string> = {
      apikey: key,
      Authorization: 'Bearer ' + key,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    }
    if (isSingle) headers['Accept'] = 'application/vnd.pgrst.object+json'
    const res = await fetch(url, {
      method,
      headers,
      body: state.body ? JSON.stringify(state.body) : undefined,
    })
    if (!res.ok) {
      const txt = await res.text()
      return { data: isSingle ? null : [], error: { message: txt } }
    }
    const txt = await res.text()
    const data = txt ? JSON.parse(txt) : (isSingle ? null : [])
    return { data, error: null }
  }

  const qb: QueryBuilder = {
    select(cols = '*') { state.selectCols = cols; return qb },
    insert(data) { state.body = data; return qb },
    update(data) { state.body = data; return qb },
    delete() { return qb },
    eq(col, val) { state.filters.push(`${col}=eq.${encodeURIComponent(String(val))}`); return qb },
    lt(col, val) { state.filters.push(`${col}=lt.${encodeURIComponent(String(val))}`); return qb },
    order(col, opts) { state.orderBy = col; state.orderAsc = opts?.ascending ?? false; return qb },
    limit(n) { state.limitN = n; return qb },
    async single() {
      const result = await execute(true)
      return result as { data: Record<string, unknown> | null; error: { message: string } | null }
    },
    async then(resolve) {
      const result = await execute(false)
      resolve(result as { data: unknown[] | null; error: { message: string } | null })
    },
  }
  return qb
}

export const supabase = {
  from(table: string) {
    return {
      select: (cols = '*') => buildQuery(table, 'GET').select(cols),
      insert: (data: Record<string, unknown>) => buildQuery(table, 'POST').insert(data),
      update: (data: Record<string, unknown>) => buildQuery(table, 'PATCH').update(data),
      delete: () => buildQuery(table, 'DELETE').delete(),
    }
  },
}

/**
 * Supabase client for CharlessDev portfolio
 * Uses environment variables - never hardcode credentials
 */


type SupabaseResponse<T> = {
  data: T | null
  error: { message: string } | null
}

async function supabaseFetch<T>(
  path: string,
  options: RequestInit = {},
  useServiceKey = false,
): Promise<SupabaseResponse<T>> {
  if (!SUPABASE_URL) {
    return { data: null, error: { message: 'Supabase URL not configured' } }
  }

  const key = useServiceKey ? SUPABASE_SERVICE_KEY : SUPABASE_ANON_KEY
  const url = `${SUPABASE_URL}/rest/v1/${path}`

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
        ...(options.headers ?? {}),
      },
    })

    if (!res.ok) {
      const errorText = await res.text()
      return { data: null, error: { message: errorText } }
    }

    const text = await res.text()
    const data = text ? (JSON.parse(text) as T) : (null as T)
    return { data, error: null }
  } catch (err) {
    return { data: null, error: { message: String(err) } }
  }
}

// ---- Blog Views ----

export async function getBlogViews(slug: string): Promise<number> {
  const { data } = await supabaseFetch<Array<{ count: number }>>(
    `blog_views?slug=eq.${encodeURIComponent(slug)}&select=count`,
  )
  return data?.[0]?.count ?? 0
}

export async function incrementBlogView(slug: string): Promise<number> {
  // Upsert view count
  const { data } = await supabaseFetch<Array<{ count: number }>>(
    'blog_views',
    {
      method: 'POST',
      body: JSON.stringify({ slug, count: 1 }),
      headers: {
        Prefer: 'resolution=merge-duplicates,return=representation',
      },
    },
    true,
  )
  if (data?.[0]) return data[0].count

  // Fallback: increment existing
  const { data: updated } = await supabaseFetch<Array<{ count: number }>>(
    `blog_views?slug=eq.${encodeURIComponent(slug)}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ count: 1 }),
      headers: { Prefer: 'return=representation' },
    },
    true,
  )
  return updated?.[0]?.count ?? 0
}

export async function getTotalBlogViews(): Promise<number> {
  const { data } = await supabaseFetch<Array<{ count: number }>>('blog_views?select=count')
  if (!data) return 0
  return data.reduce((sum, row) => sum + (row.count ?? 0), 0)
}

// ---- Blog Likes ----

export async function getBlogLikes(slug: string): Promise<number> {
  const { data } = await supabaseFetch<Array<unknown>>(
    `blog_likes?slug=eq.${encodeURIComponent(slug)}&select=id`,
  )
  return data?.length ?? 0
}

export async function hasUserLiked(slug: string, userIdentifier: string): Promise<boolean> {
  const { data } = await supabaseFetch<Array<unknown>>(
    `blog_likes?slug=eq.${encodeURIComponent(slug)}&user_identifier=eq.${encodeURIComponent(userIdentifier)}&select=id`,
  )
  return (data?.length ?? 0) > 0
}

export async function addBlogLike(slug: string, userIdentifier: string): Promise<void> {
  await supabaseFetch(
    'blog_likes',
    {
      method: 'POST',
      body: JSON.stringify({ slug, user_identifier: userIdentifier }),
    },
    true,
  )
}

export async function removeBlogLike(slug: string, userIdentifier: string): Promise<void> {
  await supabaseFetch(
    `blog_likes?slug=eq.${encodeURIComponent(slug)}&user_identifier=eq.${encodeURIComponent(userIdentifier)}`,
    { method: 'DELETE' },
    true,
  )
}

export async function getTotalBlogLikes(): Promise<number> {
  const { data } = await supabaseFetch<Array<unknown>>('blog_likes?select=id')
  return data?.length ?? 0
}

// ---- Comments ----

type Comment = {
  id: string
  slug: string
  author_name: string
  content: string
  created_at: string
}

export async function getComments(slug: string): Promise<Comment[]> {
  const { data } = await supabaseFetch<Comment[]>(
    `comments?slug=eq.${encodeURIComponent(slug)}&order=created_at.desc&select=*`,
  )
  return data ?? []
}

export async function addComment(slug: string, authorName: string, content: string): Promise<Comment | null> {
  const { data } = await supabaseFetch<Comment[]>(
    'comments',
    {
      method: 'POST',
      body: JSON.stringify({ slug, author_name: authorName, content }),
    },
    true,
  )
  return data?.[0] ?? null
}

// ---- Guestbook ----

type GuestbookEntry = {
  id: string
  author_name: string
  message: string
  created_at: string
}

export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  const { data } = await supabaseFetch<GuestbookEntry[]>('guestbook?order=created_at.desc&select=*')
  return data ?? []
}

export async function addGuestbookEntry(authorName: string, message: string): Promise<GuestbookEntry | null> {
  const { data } = await supabaseFetch<GuestbookEntry[]>(
    'guestbook',
    {
      method: 'POST',
      body: JSON.stringify({ author_name: authorName, message }),
    },
    true,
  )
  return data?.[0] ?? null
}
