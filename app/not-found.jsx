export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <h1 style={{ fontSize: 48, fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>404</h1>
      <p style={{ fontSize: 15, color: 'var(--text-muted)', marginTop: 8 }}>
        Página no encontrada
      </p>
      <a href="/" style={{
        marginTop: 20,
        fontSize: 14,
        color: 'var(--brand-text)',
        textDecoration: 'none',
        fontWeight: 500,
      }}>
        Volver al inicio
      </a>
    </div>
  )
}
