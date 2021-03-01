import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import EditForm from '../components/EditForm/EditForm'
import Home from '../components/Home/Home'
import Details from '../components/Details/Details'
import About from '../components/About/About'
import Header from '../components/Header/Header'

export default function Routes () {

	return (

		<Router>
			<Header />
			<Switch>
				<Route path="/" exact={true} component={ Home } />
				<Route path="/about" exact={true} component={ About } />
				<Route path="/:id" exact={true} component={ Details } />
				<Route path="/edit/:id" component={ EditForm } />
				<Redirect to="/" />
			</Switch>
		</Router>

	);
}