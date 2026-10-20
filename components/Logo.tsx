import Link from "next/link";

/**
 * Wordmark. The template logo is a small two square mark in near black
 * (images/logo.png), so the mark here reuses that same two square geometry,
 * inverted for the blue header the template already uses.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="rd-logo" aria-label="Ruth Digital, home">
      <span className="rd-logo__mark" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="13" height="13" stroke="currentColor" strokeWidth="2.6" />
          <rect x="8" y="8" width="13" height="13" stroke="currentColor" strokeWidth="2.6" />
        </svg>
      </span>
      {!compact && (
        <span className="rd-logo__text">
          <span className="rd-logo__name">{`Ruth Digital`}</span>
          <span className="rd-logo__tag">Nairobi, Kenya</span>
        </span>
      )}
    </Link>
  );
}
