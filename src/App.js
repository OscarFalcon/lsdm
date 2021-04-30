import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignUpContainer';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
		<React.StrictMode>
  			<BrowserRouter>
   				<Switch>
    				<Route exact path = {["/", "/login"]} component={LoginContainer} />
    				<Route exact path="/signup" component={SignupContainer} />
    				<Route exact path="/images" component={ImageGallery} />
  				</Switch>
  			</BrowserRouter>
  		</React.StrictMode>
)};

export default App;
