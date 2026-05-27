'use client'

import { useState } from 'react'

export function FAQ({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="ventia-faq-list">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={`ventia-faq-item${isOpen ? ' is-open' : ''}`}>
            <button
              className="ventia-faq-trigger"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <svg
                className="ventia-faq-chevron"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <div className="ventia-faq-body">
              <div className="ventia-faq-body-inner">{item.a}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
