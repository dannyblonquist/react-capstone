import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import Footer from "./components/footer/Footer";

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <CartContext.Provider value={{ cartItems, setCartItems }}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
          </CartContext.Provider>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
