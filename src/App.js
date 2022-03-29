import React from 'react';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import Menu from './components/Menu';
import Sites from './components/Sites';
import Careers from './components/Careers';
import { HashRouter } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path='/index.html' component={Main} />
        <Route path='/menu.html' component={Menu} />
        <Route path='/sites.html' component={Sites} />
        <Route path='/careers.html' component={Careers} />
        <Redirect to='/index.html' />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;