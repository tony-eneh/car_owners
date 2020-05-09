import React from 'react';
import './App.css';
import FiltersList from './Components/FiltersList/FiltersList';
import CarsList from './Components/CarsList/CarsList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App(){
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/cars'>
            <CarsList />
          </Route>
          <Route path='/'>
            <FiltersList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
