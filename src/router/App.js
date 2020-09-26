import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Home from '../contianers/Home';
import Login from '../contianers/Login';
import '../assets/styles/App.css'

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
      </Switch>
      <NavigationBar />
    </div>
  </BrowserRouter>
)

export default App;
