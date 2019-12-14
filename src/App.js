import React from 'react';
import './App.css';
import HomePage from './pages/home-page/homePage.component';
import ShopPage from './pages/shop/shopPage.component';
import { Switch, Route } from 'react-router-dom';
function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )

    ;
}

export default App;
