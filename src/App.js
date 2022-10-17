import './App.css'
import React from 'react'
import Header from './Header'
import MainVisual from './MainVisual'

const App = () => {
  return (
    <wrapper>
      <Header />
      <main>
        <MainVisual />
      </main>
    </wrapper>
  )
}

export default App