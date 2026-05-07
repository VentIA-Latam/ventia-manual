export function ComingSoon({ icon, items }) {
  return (
    <div>
      <div className="ventia-coming-banner">
        <div className="ventia-coming-icon">{icon}</div>
        <div>
          <div className="ventia-coming-label">Próximamente disponible</div>
          <div className="ventia-coming-text">
            Esta funcionalidad está en desarrollo y estará disponible muy pronto en tu plataforma Ventia.
          </div>
        </div>
      </div>
      {items && items.length > 0 && (
        <ul className="ventia-coming-items">
          {items.map((item, i) => (
            <li key={i}>
              <div className="ventia-coming-dot" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
