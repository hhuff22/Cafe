import React from 'react';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import Menu from './components/Menu';
import Sites from './components/Sites';
import Careers from './components/Careers';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/index' component={Main} />
        <Route path='/menu.html' component={Menu} />
        <Route path='/sites.html' component={Sites} />
        <Route path='/careers.html' component={Careers} />
        <Redirect to='/index' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;