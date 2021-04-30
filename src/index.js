import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const rootElement = document.getElementById("root");

/*ReactDOM.render(
	<App/>,
	rootElement
);*/

/**ReactDOM.render(
	<React.StrictMode>
  		<BrowserRouter>
	  		<LoginContainer/>
	  			<div>
   				<Switch>
    				<Route path = {["/", "/login"]} component={LoginContainer} />
    				<Route path="/signup" component={Signup} />
    				<Route path="/images" component={ImageGallery} />
  				</Switch>
	  			</div>
  			</BrowserRouter>
  		</React.StrictMode>**/

ReactDOM.render(
		<App/>
,rootElement);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
