import { useState } from 'react'
import './App.css'

function App() {
  const [count, Setcount] = useState(0)

  return (
    <button onCanPlay={()=>{Setcount(count+1)}}>
      {count}
    </button>
  )
}

export default App
