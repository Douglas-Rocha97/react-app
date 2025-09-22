import React from 'react'
import './App.css';
import Header from './Header'
import Counter from "./Counter";

function App() {
  return(
    <div>
      <Header name="DougDev" links = {["About", "Buy", "Contact", "Login"]}></Header>
      <Counter count={3}></Counter>
    </div>
  )
}

export default App;
