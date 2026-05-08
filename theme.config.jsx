export default {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <img
        src="/assets/ventia-logo-primary.png"
        alt="VentIA"
        className="ventia-nav-logo"
        style={{ height: 26, width: 'auto' }}
      />
      <span style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
        fontSize: 10,
        color: 'var(--text-muted)',
        borderLeft: '1px solid var(--border-strong)',
        paddingLeft: 8,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
      }}>
        Manual
      </span>
    </span>
  ),
  project: {
    link: 'https://ventia-latam.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  chat: {
    link: 'https://wa.me/51958258648',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  docsRepositoryBase: 'https://ventia-latam.com',
  footer: {
    text: 'Manual de Usuario Ventia · Versión 1.0 · Abril 2026',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – VentIA Manual',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="VentIA — Manual de Usuario" />
      <meta property="og:description" content="Manual de Usuario para la plataforma VentIA" />
    </>
  ),
  /* Cyan #29abe2 ≈ hsl(198°, 70%) */
  primaryHue: 198,
  primarySaturation: 70,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
    storageKey: 'ventia-theme',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: { text: '' },
  feedback: { content: '' },
}
