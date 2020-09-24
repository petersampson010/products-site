import React from 'react';
import { Route } from 'react-router-dom';

import Home  from './pages/home';
import Products from './pages/products';
import Opener from './pages/opener';

import './App.css';
import Basket from './pages/basket';

function App() {
  return (
    <>
      <Route path="/" exact component={Opener} />
      <Route path="/home" exact component={Home} />
      <Route path="/basket" exact component={Basket} />
      <Route path="/products" exact component={Products} />
    </>
  );
}

export default App;
