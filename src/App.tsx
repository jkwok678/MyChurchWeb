import { useState } from 'react'

import './App.css'
import { Devotions } from './components/Devotions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Devotions />
    </>
  )
}

export default App
