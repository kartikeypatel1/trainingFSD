import React from 'react'
import'./book.css'

function Book(image ,title,price) {
  return (
    <div id='book'>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h1>{price}</h1>
    </div>
  )
}

export default Book
