import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/footbar/Footer';
import SignUpContainer from './containers/SignUpContainer';
import LogInContainer from './containers/LogInContainer';
import ImageGalleryContainer from './containers/ImageGalleryContainer'
import UploadContainer from './containers/UploadContainer';
import DuplicateImageGalleryContainer from './containers/DuplicateImageGalleryContainer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path ='/' exact component = {Home}/>
            <Route path = '/upload' exact component = {UploadContainer} />
            <Route path = '/signup' exact component = {SignUpContainer}/>
            <Route path = '/login' exact component = {LogInContainer} />
            <Route path = '/images' exact component = {ImageGalleryContainer} />
            <Route path = '/duplicates' exact component = {DuplicateImageGalleryContainer} />
          </Switch>
          <Footer />
      </Router>
    </>
  );
}

export default App;
