import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/AppComponents/Header';
import MoviesDisplay from './Components/MovieComponents/MoviesDisplay';
import MovieShow from './Components/MovieComponents/MovieShow';

const App = () => (
	<React.Fragment>
		<Header />
		<Router>
			<Switch>
				<Route exact path="/" component={MoviesDisplay} />
				<Route path="/show" component={MovieShow} />
			</Switch>
		</Router>
	</React.Fragment>
);

export default App;
