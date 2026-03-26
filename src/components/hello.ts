"use client"
import { useEffect } from 'react'

export function Hello() {
  useEffect(() => {
    // oxlint-disable-next-line no-console
    console.log(
      `%cHey there, awesome developer!
If you are digging this code, check out my GitHub:
https://github.com/codexxx16
and give it a star
`,
      'font-size: 16px',
    )
  }, [])
  return null
}
