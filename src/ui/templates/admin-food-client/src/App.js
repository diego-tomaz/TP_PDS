import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Login } from "./components/Login"

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login></Login>
      </header>
    </div>
  );
}

export default App;
