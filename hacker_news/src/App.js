import React from 'react';
import {Route}  from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import NewsCards from './Components/NewsCards';
import FooterSection from './Components/FooterSection';

function App() {
  return (
    <div className="App">
      <Route component={NavBar}/> 
      <Route component={NewsCards}/>
      <Route component={FooterSection}/>
    </div>
  );
}

export default App;
