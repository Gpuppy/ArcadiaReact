import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer.js';
import Home from "./components/Home";
import Accommodation from './components/Accommodation';
import Service from "./components/Service";
import Review from "./components/Review";
import Contact from "./components/Contact";
//import Signup from "./components/Signup";
import './components/styles/header.css';
import {Routes, Route} from 'react-router-dom';
import 'axios';
import './App.css'
import './components/Arcadia2.png';
import './logo.svg';
import './components/Animals.js';
import Login from './components/Login';
import './components/Dashboard';
import './components/styles/Style.css';
import Dashboard from "./components/Dashboard";




function App(){
    return(
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element= { <Home/> } />
                <Route path="/service" element= { <Service/> } />
                <Route path="/accommodation" element= { <Accommodation/> } />
                <Route path="/review" element= { <Review/> } />
                <Route path="/contact" element= { <Contact/> } />
                <Route path="/login" element= { <Login/> } />
                <Route path="/dashboard" element= { <Dashboard/> } />


            </Routes>

            <Footer/>
        </div>
    );
}
export default App;


