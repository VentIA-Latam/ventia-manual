export function Steps({ children }) {
  return <div className="ventia-steps">{children}</div>
}

export function Step({ number, title, children }) {
  return (
    <div className="ventia-step">
      <div className="ventia-step-rail">
        <div className="ventia-step-num">{number}</div>
        <div className="ventia-step-line" />
      </div>
      <div className="ventia-step-body">
        {title && <div className="ventia-step-title">{title}</div>}
        <div className="ventia-step-content">{children}</div>
      </div>
    </div>
  )
}
