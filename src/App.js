import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home/Home.js';
import Tip from './pages/Tip/Tip.js';
import Profile from './pages/Profile/Profile.js';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Route path="/" component={Home} exact />
        <Route path="/tips" component={Tip} exact />
        <Route path="/profile" component={Profile} exact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
