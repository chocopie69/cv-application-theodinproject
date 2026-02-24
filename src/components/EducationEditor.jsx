import React from 'react'

export default function EducationEditor({ education, setEducation }) {
  function addEntry() {
    setEducation([...education, { school: '', degree: '', start: '', end: '', desc: '' }])
  }

  function updateEntry(i, field, value) {
    const copy = education.slice()
    copy[i] = { ...copy[i], [field]: value }
    setEducation(copy)
  }

  function removeEntry(i) {
    const copy = education.slice()
    copy.splice(i, 1)
    setEducation(copy)
  }

  return (
    <div className="listEditor">
      <h3>Education</h3>
      {education.map((e, i) => (
        <div className="listRow" key={i}>
          <input placeholder="School / Institution" value={e.school} onChange={ev => updateEntry(i, 'school', ev.target.value)} />
          <input placeholder="Degree / Course" value={e.degree} onChange={ev => updateEntry(i, 'degree', ev.target.value)} />
          <div className="dates">
            <input placeholder="Start" value={e.start} onChange={ev => updateEntry(i, 'start', ev.target.value)} />
            <input placeholder="End" value={e.end} onChange={ev => updateEntry(i, 'end', ev.target.value)} />
          </div>
          <textarea placeholder="Notes" value={e.desc} onChange={ev => updateEntry(i, 'desc', ev.target.value)} />
          <div className="rowActions">
            <button className="smallBtn" onClick={() => removeEntry(i)}>Remove</button>
          </div>
        </div>
      ))}
      <div style={{marginTop:8}}>
        <button className="addBtn" onClick={addEntry}>Add Education</button>
      </div>
    </div>
  )
}
