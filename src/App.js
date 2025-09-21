import React from 'react'
import './App.css';
import Header from './Header'

function App() {
  return(
    <Header name="DougDev" links = {["About", "Buy", "Contact", "Login"]}></Header>
  )
}

export default App;
