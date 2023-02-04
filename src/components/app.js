import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Clock from "../routes/clock";
import Clicker from '../routes/clicker';
const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Home path="/" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user/:d" />
				<Clock path="/clock/"/>
				<Clicker path="/clicker"/>
			</Router>
		</main>
	</div>
);

export default App;
