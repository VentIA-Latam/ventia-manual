export function DataTable({ headers, rows }) {
  return (
    <div className="ventia-dt-wrap">
      <table className="ventia-dt" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: 'var(--bg-table-hd)', borderBottom: '1px solid var(--border-strong)' }}>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '.10em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderTop: i > 0 ? '1px solid var(--border)' : 'none' }}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: '11px 16px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13.5,
                    color: 'var(--text-body)',
                    lineHeight: 1.5,
                    verticalAlign: 'top',
                  }}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
