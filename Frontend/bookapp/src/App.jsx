import { useState } from 'react'

import  Book  from './components/Book.jsx'

function App() {
 
  return (
      <div style={{display:'flex',gap:'20px'}}>
        <Book 
        image="https://tse2.mm.bing.net/th/id/OIP.I905-ukAAUAxiTvIkBH69gHaKT?pid=Api&P=0&h=180"
        title="Math" 
        price="$20"  />
        <Book 
        image="https://tse4.mm.bing.net/th/id/OIP.H72wpyOfj69xQQ0wOuHlnAHaHa?pid=Api&P=0&h=180" 
        title="chemistry" 
        price="$32" />
        <Book 
        image="https://tse4.mm.bing.net/th/id/OIP.04Sdnuwg_UpPiL3vhPG16QHaJQ?pid=Api&P=0&h=180" 
        title="physics" 
        price="$25" />
      </div>
  )
}

export default App
