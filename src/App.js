import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import DoubleDigitSum from './components/DoubleDigitSum';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/doubledigitsum">
          <DoubleDigitSum />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
