import React from 'react'

export default function Preview({ name, email, phone, profile, experience = [], education = [] }) {
  return (
    <div className="previewCard" id="cv-preview">
      <div className="previewHeader">
        <div className="name">{name || 'Your Name'}</div>
        <div className="headline">Curriculum Vitae</div>
      </div>

      <div className="cvSection">
        <h3>PERSONAL DETAILS</h3>
        <div className="cvDivider" />
        <p><strong>Email:</strong> {email || '—'}</p>
        <p><strong>Phone:</strong> {phone || '—'}</p>
      </div>

      <div className="cvSection">
        <h3>PERSONAL PROFILE</h3>
        <div className="cvDivider" />
        <p className="profileText">{profile || '—'}</p>
      </div>

      {experience.length > 0 && (
        <div className="cvSection">
          <h3>EXPERIENCE</h3>
          <div className="cvDivider" />
          {experience.map((e, i) => (
            <div className="listItem" key={i}>
              <div className="itemTitle">{e.title || '—'} <span className="muted">@ {e.company || '—'}</span></div>
              <div className="itemDates">{e.start} — {e.end}</div>
              <div className="itemDesc">{e.desc}</div>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="cvSection">
          <h3>EDUCATION</h3>
          <div className="cvDivider" />
          {education.map((ed, i) => (
            <div className="listItem" key={i}>
              <div className="itemTitle">{ed.school || '—'} <span className="muted">{ed.degree ? `— ${ed.degree}` : ''}</span></div>
              <div className="itemDates">{ed.start} — {ed.end}</div>
              <div className="itemDesc">{ed.desc}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
