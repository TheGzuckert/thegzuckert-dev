function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 17.302c-.22.363-.692.478-1.055.258-2.896-1.777-6.541-2.178-10.84-1.192-.413.094-.827-.163-.92-.575-.094-.413.163-.827.575-.92 4.716-1.073 8.885-.622 12.116 1.345.363.22.478.692.258 1.055zm1.474-3.28c-.276.45-.863.59-1.313.314-3.312-2.035-8.369-2.625-12.29-1.436-.505.153-1.04-.132-1.193-.637-.153-.505.132-1.04.637-1.193 4.487-1.362 10.015-.712 13.747 1.553.45.276.59.863.314 1.313zm.126-3.422C14.973 8.732 8.447 8.447 4.902 9.675c-.606.184-1.25-.157-1.434-.763-.184-.606.157-1.25.763-1.434 4.053-1.232 11.2-.887 15.318 1.292.545.315.732 1.01.417 1.555-.315.545-1.01.732-1.555.417z" />
    </svg>
  )
}

type SpotifyNowPlayingProps = {
  title?: string
  artist?: string
  url?: string
  albumArt?: string
  isLoading?: boolean
}

export function SpotifyNowPlaying({
  title,
  artist,
  url,
  albumArt,
  isLoading,
}: SpotifyNowPlayingProps) {
  const hasTrack = Boolean(title)
  const label = hasTrack
    ? artist
      ? `${artist} — ${title}`
      : title
    : 'Não estou ouvindo nada agora'

  const content = (
    <>
      {hasTrack && albumArt ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={albumArt}
          alt=""
          className="h-5 w-5 shrink-0 rounded-full object-cover md:h-6 md:w-6"
        />
      ) : (
        <SpotifyIcon className="h-5 w-5 shrink-0 text-[#1DB954]" />
      )}
      <span className="truncate">{isLoading ? 'Carregando...' : label}</span>
    </>
  )

  const className =
    'inline-flex w-full items-center gap-2.5 rounded-full border border-border bg-muted/40 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors md:px-5 md:py-3 md:text-sm'

  if (hasTrack && url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:border-foreground/20 hover:bg-muted/70 hover:text-foreground`}
      >
        {content}
      </a>
    )
  }

  return <div className={className}>{content}</div>
}
