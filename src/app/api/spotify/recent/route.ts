const SPOTIFY_USER_ID = '22a4l5mwumpbfv352josjjbiy'

export type SpotifyTrack = {
  playing: boolean
  title?: string
  artist?: string
  url?: string
  albumArt?: string
}

function parseTrackFromSvg(svg: string): SpotifyTrack {
  if (svg.includes('Spotify authorization needed')) {
    return { playing: false }
  }

  const titleMatch = svg.match(
    /meta-title"><a[^>]+href="([^"]+)"[^>]*>([^<]+)/,
  )
  const artistMatch = svg.match(
    /meta-description"><span[^>]+title="([^"]+)">([^<]+)/,
  )
  const artMatch = svg.match(
    /ant-avatar-image"><img src="(data:image\/jpg;base64,[^"]+)/,
  )

  if (!titleMatch) {
    return { playing: false }
  }

  return {
    playing: true,
    title: titleMatch[2],
    url: titleMatch[1],
    artist: artistMatch?.[2] ?? artistMatch?.[1],
    albumArt: artMatch?.[1],
  }
}

export async function GET() {
  const url = new URL(
    'https://spotify-recently-played-readme.vercel.app/api',
  )
  url.searchParams.set('user', SPOTIFY_USER_ID)
  url.searchParams.set('count', '1')
  url.searchParams.set('width', '320')
  url.searchParams.set('unique', 'true')

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      return Response.json({ playing: false } satisfies SpotifyTrack)
    }

    const svg = await response.text()
    return Response.json(parseTrackFromSvg(svg))
  } catch {
    return Response.json({ playing: false } satisfies SpotifyTrack)
  }
}
