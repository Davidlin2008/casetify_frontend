import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/product" component={Product} />
        <Route path="/productlist" component={ProductList} />
      </Switch>
    </Router>
  );
};

export default Routes;
