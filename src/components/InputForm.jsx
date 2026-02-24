import React from 'react'

export default function InputForm({ name, email, phone, profile, setName, setEmail, setPhone, setProfile }) {
  return (
    <div className="formSection">
      <h2>Input Your Details</h2>

      <label className="field">
        <div className="label">Name</div>
        <input value={name} placeholder='Your name' onChange={e => setName(e.target.value)} />
      </label>

      <label className="field">
        <div className="label">Email</div>
        <input value={email} placeholder='example@gmail.com' onChange={e => setEmail(e.target.value)} />
      </label>

      <label className="field">
        <div className="label">Phone</div>
        <input value={phone} placeholder='+0123456789' onChange={e => setPhone(e.target.value)} />
      </label>

      <div className="sectionTitle">Personal Profile</div>
      <textarea value={profile} onChange={e => setProfile(e.target.value)} rows={5} />
    </div>
  )
}
