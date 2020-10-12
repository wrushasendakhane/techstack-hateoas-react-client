import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Dashboard from './components/dashboard/dashboard.component';
import Home from './container/home/home.container';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
