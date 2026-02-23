import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* 
  Vefsíða þar sem hægt er að setja inn nafn og email og ýta á submit takka
  sem sýnir textann submitted.
*/

function App() {
  const [myName, setMyName] = useState('Kristin')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMyName(e.target.value)
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <h2>Hello {myName}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={myName}
            onChange={handleNameChange}
            placeholder="Sláðu inn nafn"
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p style={{ marginTop: '1rem', color: 'green' }}>
          Submitted ✅
        </p>
      )}
    </>
  )
}

export default App