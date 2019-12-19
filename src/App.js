import React from 'react';
import './App.css';
import HomePage from './pages/home-page/homePage.component';
import ShopPage from './pages/shop/shopPage.component';
import Header from './components/header/header.component';
import SignPage from './pages/Sign-in-up-page/signPage.component';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signIn' component={SignPage}/>
      </Switch>
    </div>
  )

    ;
}

export default App;
