import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div id='card'>
        <img src="https://images.unsplash.com/photo-1761405378543-e74453424152?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600" alt="image" height={100} width={100}/>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Card
