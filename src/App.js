import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/productList";
import ShopContextProvider from "./context/shopContext";
import Nav from "./compenents/nav";
import CartData from "./pages/cartpage";
import Description from "./pages/description";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navtoggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ShopContextProvider>
      <Router>
        <Nav toggle={navtoggle} isOpen={isOpen} />

        <div className="lg:max-w-screen-2xl lg:w-full lg:m-auto lg:shadow-xl lg:px-6 lg:py-6">
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/products" exact component={Products} />
            <Route path="/cart" exact component={CartData} />
            <Route path="/product:id" exact component={Description} />
          </Switch>
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
