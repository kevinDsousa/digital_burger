import { useState } from 'react'
import './App.css'
import Navigate from './components/routes/Navigate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigate />
    </div>
  )
}

export default App
