import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import UserLandpage from './components/UserLandpage';
import RestoLandpage from './components/RestoLandpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/UserLandpage" component={UserLandpage} exact />
          <Route path="/RestoLandpage" component={RestoLandpage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
