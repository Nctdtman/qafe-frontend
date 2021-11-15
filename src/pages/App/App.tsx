import { useState } from 'react'
import { useParams } from 'react-router-dom'

function App() {
  const { id = '' } = useParams<{ id: string }>()
  return (
    <div className="App">
      这是首页
      <p>
        这是传参id
        <span>{id}</span>
      </p>
    </div>
  )
}

export default App
