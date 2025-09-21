import React from 'react'
import './App.css';
import Header from './Header'

function App() {
  return(
    <Header name="DougDev" links = {["About", "Buy", "Contact"]}></Header>
  )
}

export default App;
