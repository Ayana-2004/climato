const APP_STORE_URL = "https://apps.apple.com/us/app/climato/id6755456353";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.climato";

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.462 2.15-1.18 2.9-.783.82-2.06 1.45-3.06 1.37-.13-1.09.46-2.24 1.16-2.96.78-.82 2.13-1.44 3.08-1.31zM20.7 17.24c-.53 1.22-.78 1.77-1.46 2.85-.95 1.5-2.29 3.37-3.95 3.39-1.48.02-1.86-.96-3.87-.95-2 .01-2.42.97-3.9.95-1.66-.02-2.93-1.7-3.88-3.2C1.06 16.32.4 11.9 2.32 9.02c1.14-1.72 2.94-2.73 4.63-2.73 1.55 0 2.53 1.02 3.81 1.02 1.24 0 2-1.02 3.82-1.02 1.36 0 2.8.74 3.83 2.02-3.37 1.85-2.83 6.66.29 7.93z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.42a1 1 0 0 0-.6.92v17.32a1 1 0 0 0 .6.92l9.6-9.58-9.6-9.58zM14.5 12l2.63-2.63 3.86 2.2c.67.38.67 1.3 0 1.68l-3.86 2.2L14.5 12zM4.2 21.9l8.6-8.6 2.44 2.44-9.9 5.66c-.4.23-.86.24-1.14.5zM12.8 10.7 4.2 2.1c.28.26.74.27 1.14.5l9.9 5.66-2.44 2.44z" />
    </svg>
  );
}

export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        <AppleIcon />
        <span>
          Download on the <span className="font-semibold">App Store</span>
        </span>
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl border border-white bg-white px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-sky-deep"
      >
        <PlayIcon />
        <span>
          Get it on <span className="font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

export { APP_STORE_URL, PLAY_STORE_URL };
