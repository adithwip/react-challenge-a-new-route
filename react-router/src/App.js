import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Homepage from './components/home_page'
import About from './components/about'
import './App.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Route exact path="/" component={Homepage} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		)
  }
}

export default App;
