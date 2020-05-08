import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import PlantList from "./components/PlantList";
import {useNightMode} from './hooks/useNightMode'
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";

import "./App.css";

function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);
  const [nightMode, setNightMode]=useNightMode(false)

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };
  const toggleMode = e => {
    e.preventDefault();
    setNightMode(!nightMode);
  };

  return (
    <div>
      <Router>
        <nav className="container">
          <h1>
            React Plants <span role="img">🌿</span>
          </h1>
          <ul className="steps">
            <li>
              <a
                onClick={toggleMode}>
                {nightMode?'Day-Mode':'Night-Mode'}
              </a>
            </li>
            <li>
              <NavLink exact to="/">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => <PlantList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout">
          <CheckoutForm nightMode={nightMode}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
