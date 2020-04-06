import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.js";
import Index from "./components/Home/Index.js";

import "./assets/scss/index.scss"


function App() {
  return (
    <div>
      <Header/>
      <Index/>

    </div>
  );
}

export default App;
