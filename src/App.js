import { useState, useEffect } from "react";
import commerce from "./lib/commerce";
import { Products, NavBar, Cart } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState({});
  const fetchData = async () => {
    try {
      const { data } = await commerce.products.list();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };
  //fetch Cart
  const fetchCart = async () => {
    try {
      const myCart = await commerce.cart.retrieve();
      setCart(myCart);
      console.log(cart);
    } catch (error) {
      console.log("couldn't fetch cart" + error);
    }
  };
  //cart handler
  const cartHandler = async (id, number) => {
    const cartItem = await commerce.cart.add(id, number);
    setCart(cartItem.cart);
    console.log("you Added item to cart");
    console.log(cart);
  };

  useEffect(() => {
    fetchData();
    fetchCart();
  }, []);
  return (
    <Router>
      <div>
        <NavBar cart={cart} />
        <Routes>
          <Route path="/" element={<Products items={items} cartHandler={cartHandler} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
