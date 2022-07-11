import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
   const [name,setName]= useState('Satya');
  const handleClick=()=>{
    setName('Roy');
    console.log(name);
  }

  return (
    <div className="App">
      <h1>Welcome {name}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
