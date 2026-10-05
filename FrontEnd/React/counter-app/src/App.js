import React from 'react'
import Counter from './Components/Counter'
import './App.css'
import Global from './Components/Global'
import Example from './Components/Example'
import Card from './Components/Card'

const App = () => {
  return (
    <div>
      <Counter />
      <Global />
      <Example />
      <Card />
    </div>
  )
}

export default App