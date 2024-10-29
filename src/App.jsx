import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [task, setTask] = useState([])
  return (
    <>
      <h1 className="text-2xl font-bold text-blue-500 text-center">Hello World!</h1>
    </>
  )
}