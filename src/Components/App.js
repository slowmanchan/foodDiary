import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  hashHistory,
  Route,
  Link
} from 'react-router';
import Home from './Home';
import About from './About';
import FoodLog from './FoodLog';
import SearchContainer from './SearchContainer';
import NavBar from './NavBar';
// import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <NavBar />
        <Route path='/' component={Home}/>
        <Route path='/food-logs' component={FoodLog}/>
        <Route path='/about' component={About}/>
        <Route path='/search' component={SearchContainer}/>

      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
