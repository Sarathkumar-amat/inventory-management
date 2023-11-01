import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ItemsList } from './pages/ItemsList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1>Inventory management</h1>
        <ItemsList />
    </>
  )
}

export default App
