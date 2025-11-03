import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Usestate from './components/Usestate'

function App() {
  return (
     
    <div id='app'>
     <Navbar LOGO="ABES ENGINEERING COLLEGE" />
       <br />
      <Card name="Kartikey Patel"/> <br />
      <Card name="Kartikey Patel"/>
      <br />
      <Card name="hello Patel"/>
      <Usestate></Usestate>
    </div>
  )
}

export default App
