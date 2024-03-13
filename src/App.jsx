import './App.css'
import Bottles from './Components/Bottles/Bottles'
import { useEffect, useState } from 'react';
import { addToLS } from './utilities/localstorage';

function App() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('../public/bottle.json')
      .then(res => res.json())
      .then(data => setBottles(data));
  }, [])

  const handleAddCart = bottle => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  }

  return (
    <>
      <h2>Bottles Available: {bottles.length}</h2>
      <h4>Cart: {cart.length}</h4>
      <div className='bottle-container'>
        {
          bottles.map(bottle => <Bottles
            key={bottle.id}
            handleAddCart={handleAddCart}
            bottle={bottle}
          ></Bottles>)
        }
      </div>
    </>
  )
}

export default App
