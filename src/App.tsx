import { useState } from 'react'
import './App.css'
import Typography from '@mui/material/Typography/Typography'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography variant='h1'>Welcome to Bookmarx!</Typography>
    </>
  )
}

export default App
