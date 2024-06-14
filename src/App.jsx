import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './features/counter/Counter'
import Header from './components/Header'
import FormComponent from './features/form/FormComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      {/* <Counter /> */}
      <FormComponent/>
    </>
  )
}

export default App
