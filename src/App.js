import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import LogInContainer from './containers/LogInContainer';
import SignupContainer from './containers/SignUpContainer';
import ImageGalleryContainer from './containers/ImageGalleryContainer';

function App() {
  return (
		<React.StrictMode>
  			<BrowserRouter>
   				<Switch>
    				<Route exact path = {["/", "/login"]} component={LogInContainer} />
    				<Route exact path="/signup" component={SignupContainer} />
    				<Route exact path="/images" component={ImageGalleryContainer} />
  				</Switch>
  			</BrowserRouter>
  		</React.StrictMode>
)};

export default App;
