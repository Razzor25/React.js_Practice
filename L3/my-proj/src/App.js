import './App.css';
import {useState} from 'react';

function App() {
  const [name,setName]= useState('Satya');

  const [events,setEvents]=useState([
    {title: 'Valorant' , id: 1},
    {title: 'Dota2' , id: 2},
    {title: 'CS-GO' , id: 3},
  ]
  );
  

  return (
    <div className="App">
      <h1>Welcome {name}</h1>
        {events.map((event)=>(
          <div key={event.id}>
            <h2>{event.id}-{event.title}</h2>
          </div>
        ))}
    </div>
  );
}

export default App;
