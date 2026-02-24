import React from 'react'

export default function ExperienceEditor({ experience, setExperience }) {
  function addEntry() {
    setExperience([...experience, { title: '', company: '', start: '', end: '', desc: '' }])
  }

  function updateEntry(i, field, value) {
    const copy = experience.slice()
    copy[i] = { ...copy[i], [field]: value }
    setExperience(copy)
  }

  function removeEntry(i) {
    const copy = experience.slice()
    copy.splice(i, 1)
    setExperience(copy)
  }

  return (
    <div className="listEditor">
      <h3>Experience</h3>
      {experience.map((e, i) => (
        <div className="listRow" key={i}>
          <input placeholder="Job title" value={e.title} onChange={ev => updateEntry(i, 'title', ev.target.value)} />
          <input placeholder="Company" value={e.company} onChange={ev => updateEntry(i, 'company', ev.target.value)} />
          <div className="dates">
            <input placeholder="Start" value={e.start} onChange={ev => updateEntry(i, 'start', ev.target.value)} />
            <input placeholder="End" value={e.end} onChange={ev => updateEntry(i, 'end', ev.target.value)} />
          </div>
          <textarea placeholder="Description" value={e.desc} onChange={ev => updateEntry(i, 'desc', ev.target.value)} />
          <div className="rowActions">
            <button className="smallBtn" onClick={() => removeEntry(i)}>Remove</button>
          </div>
        </div>
      ))}
      <div style={{marginTop:8}}>
        <button className="addBtn" onClick={addEntry}>Add Experience</button>
      </div>
    </div>
  )
}
