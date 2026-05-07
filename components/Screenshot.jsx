export function Screenshot({ src, caption }) {
  return (
    <figure className="ventia-screenshot">
      <div className="ventia-screenshot-frame">
        <img src={src} alt={caption || ''} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
