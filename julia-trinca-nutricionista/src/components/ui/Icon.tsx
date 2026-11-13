type IconName = "whatsapp" | "instagram" | "arrow" | "arrow-down" | "leaf" | "sprout" | "heart" | "pin" | "video";

const paths: Record<IconName, React.ReactNode> = {
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.16-1.5A9.93 9.93 0 1 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.07.9.92-2.98-.2-.31a8.22 8.22 0 1 1 6.83 3.72Zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.96-.14.17-.29.19-.53.06a6.74 6.74 0 0 1-3.37-2.94c-.25-.44.25-.41.73-1.36.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.73 2.73 0 0 0-.85 2.03 4.75 4.75 0 0 0 1 2.52 10.86 10.86 0 0 0 4.16 3.67c1.55.67 2.15.73 2.92.61.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z"
    />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-down": <path d="M12 5v14M6 13l6 6 6-6" />,
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z" />
      <path d="M5 19 13 11" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="3" />
      <path d="m16 10 5-3v10l-5-3" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  sprout: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6Z" />
      <path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7Z" />
    </>
  ),
};

export function Icon({ name, size = 20, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
