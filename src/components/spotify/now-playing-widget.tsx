'use client'

import { useEffect, useState } from 'react'
import {
  SpotifyNowPlaying,
} from '@/components/spotify/now-playing'
import type { SpotifyTrack } from '@/app/api/spotify/recent/route'

export function SpotifyNowPlayingWidget() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadTrack() {
      try {
        const response = await fetch('/api/spotify/recent')
        const data: SpotifyTrack = await response.json()
        setTrack(data)
      } catch {
        setTrack({ playing: false })
      } finally {
        setIsLoading(false)
      }
    }

    loadTrack()
    const interval = setInterval(loadTrack, 60_000)

    return () => clearInterval(interval)
  }, [])

  return (
    <SpotifyNowPlaying
      title={track?.title}
      artist={track?.artist}
      url={track?.url}
      albumArt={track?.albumArt}
      isLoading={isLoading}
    />
  )
}
