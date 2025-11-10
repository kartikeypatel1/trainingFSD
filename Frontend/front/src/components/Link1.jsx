import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
function Home(params) {
            return <h2>Home Page</h2>
        }
function About(params) {
            return <h2>About Page</h2>
        }
function Contact(params) {
            return <h2>Contact Page</h2>
        }
function link1() {
  return (
    <div>
        
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
            </div>
  )
}

export default link1;
