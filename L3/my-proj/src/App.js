import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
   const [name,setName]= useState('Satya');
  const handleClick=()=>{
    setName('Roy');
    console.log(name);
  }
  const [list,setList]=useState([
    {title: 'Valorant' , id: 1},
    {title: 'Dota2' , id: 2},
    {title: 'CS-GO' , id: 3},
  ]
  );

  return (
    <div className="App">
      <h1>Welcome {name}</h1>

        {list.map((things)=>(
          <p>{things.title}</p>
        ))}

    </div>
  );
}

export default App;
