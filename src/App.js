import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/productList";
import ShopContextProvider from "./context/shopContext";
import Nav from "./compenents/nav";
import CartData from "./pages/cartpage";
import { useState } from "react";
import Dropdown from "./compenents/dropdown";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navtoggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ShopContextProvider>
      <Router>
        <Nav toggle={navtoggle} />

        <div className="lg:max-w-screen-2xl lg:w-full lg:m-auto lg:shadow-xl lg:px-6 lg:min-h-screen">
          <Dropdown toggle={navtoggle} isOpen={isOpen} />

          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" component={CartData} />
          </Switch>
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
