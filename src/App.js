import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Upload from './components/pages/Upload'
import Footer from './components/Footer'
import SignUp from './components/pages/SignUp'
import LogIn from './components/pages/LogIn'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path ='/' exact component = {Home}/>
            <Route path = '/Upload' exact component = {Upload} />
            <Route path = '/SignUp' exact component = {SignUp}/>
            <Route path = '/LogIn' exact component = {LogIn} />
          </Switch>
          <Footer />
      </Router>
   
    </>
	
  );
}

export default App;
