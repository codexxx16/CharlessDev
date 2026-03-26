// Simplified auth client - no authentication required for guestbook
// Visitors can post messages anonymously

export type User = {
  id: string
  name: string
  email: string
  image: string | null
}

export type Session = {
  user: User
}

// Returns null - no auth in this version
export function useSession(): { data: Session | null; isPending: boolean } {
  return { data: null, isPending: false }
}

export const authClient = {
  signIn: {
    social: async () => {},
  },
  signOut: async () => {},
}
