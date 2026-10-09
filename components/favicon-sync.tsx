"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

// Favicons can only see the OS color scheme (see the media query in app/icon.svg),
// so this swaps the tab icon whenever the site theme toggle changes.
export function FaviconSync() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!resolvedTheme) return
    const href = resolvedTheme === "dark" ? "/icon-dark.svg" : "/icon-light.svg"
    document.querySelectorAll<HTMLLinkElement>('link[rel~="icon"][type="image/svg+xml"]').forEach((link) => {
      link.href = href
    })
  }, [resolvedTheme])

  return null
}
