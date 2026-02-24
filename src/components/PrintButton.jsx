import React from 'react'

export default function PrintButton() {
  return (
    <div className="actions">
      <button className="printBtn" onClick={() => window.print()}>Print CV</button>
    </div>
  )
}
