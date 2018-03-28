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
import Stats from './Stats';
import SearchContainer from './SearchContainer';

// import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>

        <Router history={hashHistory}>

          <div>
            <Route path='/' component={Home}/>
            <Route path='/stats' component={Stats} />
            <Route path='/food-logs' component={FoodLog}/>
            <Route path='/about' component={About}/>
            <Route path='/search' component={SearchContainer}/>
          </div>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
