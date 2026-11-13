/** Logo: selo com monograma JT e folha, mais o nome. Cores via currentColor/tokens. */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="31" fill="var(--tan)" />
      <circle cx="32" cy="32" r="26.5" fill="none" stroke="var(--green-900)" strokeOpacity="0.35" strokeWidth="1" />
      {/* folha que nasce do J */}
      <path d="M38.5 14.5c7.5 1.2 11 6.6 10.4 13.6-6.9.3-11.8-3.6-10.4-13.6Z" fill="var(--green-800)" />
      <path d="M39.4 15.6c2.4 3.9 5 7.6 9.1 12" stroke="var(--tan)" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      {/* J */}
      <path d="M30 20v17.5c0 4.6-2.6 7.2-6.6 7.2-2.6 0-4.5-1.1-5.6-2.9" stroke="var(--green-900)" strokeWidth="4.2" fill="none" strokeLinecap="round" />
      {/* T */}
      <path d="M33 26h14M40 26v20" stroke="var(--green-900)" strokeWidth="4.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
