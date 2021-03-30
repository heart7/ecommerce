import './App.css';
import React from 'react';
import {Route,  Switch} from 'react-router-dom';

import Homepage from './components/pages/homepage/homepage_component';
import { ShopPage } from './components/pages/shop/shop_collection';

function App() {
  return (
    <div>
    <Switch>
    
    < Route exact path='/' component={Homepage } />
    < Route exact path='/Shop' component={ShopPage } />
    </Switch>
    
    </div>
  );
}

export default App;
