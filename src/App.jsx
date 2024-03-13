import './App.css'
import Bottles from './Components/Bottles/Bottles'
import { useEffect, useState } from 'react';
import { addToLS, getStoredCart } from './utilities/localstorage';
import Cart from './Components/Cart/Cart';

function App() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('../public/bottle.json')
      .then(res => res.json())
      .then(data => setBottles(data));
  }, [])

  // load cart from local storage
  useEffect(() => {
    if(bottles.length){
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);
      const savedCart = [];
      for(const id of storedCart){
        const bottle = bottles.find(bottle => bottle.id === id);
        if(bottle){
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles])

  const handleAddCart = bottle => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  }

  return (
    <>
      <h2>Bottles Available: {bottles.length}</h2>
      <Cart cart={cart}></Cart>
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
