import './App.css'
import Bottles from './Components/Bottles/Bottles'
import { useEffect, useState } from 'react';

function App() {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch('../public/bottle.json')
      .then(res => res.json())
      .then(data => setBottles(data));
  }, [])

  return (
    <>
      <h1>Bottles Length: {bottles.length}</h1>
        <div className='bottle-container'>
          {
            bottles.map(bottle => <Bottles
              key={bottle.id}
              bottle={bottle}
            ></Bottles>)
          }
        </div>
    </>
  )
}

export default App
