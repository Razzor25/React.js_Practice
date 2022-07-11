import logo from './logo.svg';
import './App.css';

function App() {
  let name='Satya';
  const handleClick=()=>{
    name='Roy';
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
