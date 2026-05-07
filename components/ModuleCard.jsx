export function ModuleCard({ href, title, description, badge }) {
  return (
    <a href={href} className="ventia-module-card">
      <div className="ventia-module-info">
        <div className="ventia-module-title">
          {title}
          {badge && <span className="ventia-module-badge">{badge}</span>}
        </div>
        <div className="ventia-module-desc">{description}</div>
      </div>
      <svg
        className="ventia-module-arrow"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </a>
  )
}
