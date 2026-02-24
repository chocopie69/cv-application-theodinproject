import { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import Preview from './components/Preview'
import PrintButton from './components/PrintButton'
import ExperienceEditor from './components/ExperienceEditor'
import EducationEditor from './components/EducationEditor'

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [profile, setProfile] = useState('')
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])

  return (
    <div className="app">
      <div className="editor">
        <div className="inputCard">
          <InputForm
            name={name}
            email={email}
            phone={phone}
            profile={profile}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setProfile={setProfile}
          />
          <ExperienceEditor experience={experience} setExperience={setExperience} />
          <EducationEditor education={education} setEducation={setEducation} />
          <PrintButton />
        </div>

        <Preview name={name} email={email} phone={phone} profile={profile} experience={experience} education={education} />
      </div>
    </div>
  )
}
