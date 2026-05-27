import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles/globals.css'

export const metadata = {
  title: {
    default: 'VentIA — Manual de Usuario',
    template: '%s – VentIA Manual',
  },
  description: 'Manual de Usuario para la plataforma VentIA',
  icons: {
    icon: '/assets/logo-ventia-celeste.png',
  },
  openGraph: {
    title: 'VentIA — Manual de Usuario',
    description: 'Manual de Usuario para la plataforma VentIA',
  },
}

const logo = (
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
)

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://ventia-latam.com"
    projectIcon={
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    }
    chatLink="https://wa.me/51958258648"
    chatIcon={
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    }
  />
)

export default async function RootLayout({ children }) {
  return (
    <html lang="es" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://ventia-latam.com"
          editLink=""
          feedback={{ content: '' }}
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
