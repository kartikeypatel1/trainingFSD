import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <div>
      <Navbar/>
      <h1>Restaurent</h1><br />
       <Card
          image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
          name="Cheese Pizza"
          price="299"
          description="Crispy thin crust pizza loaded with mozzarella cheese."
        />
        <Card
          image="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
          name="Veg Burger"
          price="149"
          description="Freshly made burger with lettuce, tomato, and cheese."
        />
        <Card
          image="https://images.unsplash.com/photo-1662197480393-2a82030b7b83?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFzdGElMjBBbGZyZWRvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
          name="Pasta Alfredo"
          price="249"
          description="Creamy pasta made with rich Alfredo sauce."
        />
      
    </div>
  )
}

export default App
