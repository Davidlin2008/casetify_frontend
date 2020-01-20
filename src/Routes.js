import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
import Product from 'pages/Product';
import ProductList from 'pages/ProductList';
import MyPage from 'pages/MyPage';
import Navbar from 'components/Navbar';
import MyCart from 'components/MyCart';
import Payment from 'pages/Payment';

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
        <Route exact path="/mypage" component={MyPage} />
        <Route path="/mypage/:option" component={MyPage} />
        <Route path="/cart" component={MyCart} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </Router>
  );
};

export default Routes;
