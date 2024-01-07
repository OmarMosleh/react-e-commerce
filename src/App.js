import { useState, useEffect } from "react";
import commerce from "./lib/commerce";
import { Products, NavBar, Cart, CheckOut } from "./components";
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
    } catch (error) {
      console.log("couldn't fetch cart" + error);
    }
  };
  //cart handler
const cartHandler = async (id, number) => {
  const cartItem = await commerce.cart.add(id, number);
  setCart(cartItem);
};
//cartUpdateQtyHandler
const cartUpdateQtyHandler = async (productId,qty)=>{
  const response = await commerce.cart.update(productId,{quantity :qty});
  setCart(response);
}
//removeFromCartHandler
const removeFromCartHandler = async(productId)=>{
  const response = await commerce.cart.remove(productId);
  setCart(response);
  console.log(productId+ "has been removed")
}
//empty cart
const emptyCartHandler =async ()=>{
  const response = await commerce.cart.empty();
  setCart(response);
}
  useEffect(() => {
    fetchData();
    fetchCart();
  }, []);
  return (
    <Router>
      <div>
        {cart&&<NavBar cart={cart} />}
        <Routes>
          <Route path="/" element={<Products items={items} cartHandler={cartHandler} />} />
          <Route path="/cart" element={<Cart cart={cart} cartUpdateQtyHandler={cartUpdateQtyHandler} removeFromCartHandler={removeFromCartHandler} emptyCartHandler={emptyCartHandler} />} />
          <Route path="/checkout" element={<CheckOut cart={cart}  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
