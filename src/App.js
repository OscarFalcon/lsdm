import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Upload from './components/pages/Upload'
import Footer from './components/footbar/Footer'
import SignUpContainer from './containers/SignUpContainer'
import LogInContainer from './containers/LogInContainer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path ='/' exact component = {Home}/>
            <Route path = '/Upload' exact component = {Upload} />
            <Route path = '/SignUp' exact component = {SignUpContainer}/>
            <Route path = '/LogIn' exact component = {LogInContainer} />
          </Switch>
          <Footer />
      </Router>
   
    </>
	
  );
}

export default App;
