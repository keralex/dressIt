import React from 'react';
import './App.css';
import HomePage from './pages/home-page/homePage.component';
import {Switch, Route} from 'react-router-dom';
function App() {
  const HatsPage = () => (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
  return(
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop/hats'component={HatsPage}/>
      </Switch>
   </div>
  ) 
 
  ;
}

export default App;
