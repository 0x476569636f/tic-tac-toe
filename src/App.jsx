import { useState } from 'react'
import './App.css'
import Square from './components/Square'

const App = () => {
  return (
    <div className='board'>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  )
}

export default App;
