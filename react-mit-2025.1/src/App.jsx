import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container 
} from "reactstrap"

import Header from "./components/Header";
import Users from "./components/Users";
import Feedback from "./components/Feedback";
import Home from "./components/Home";

import './App.css'

function App() {


  return (
    <Router>
      <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
        <Header/>
        <Container className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/feedback" element={<Feedback/>} />
          </Routes>
        </Container>
        <footer className="bg-dark text-white text-center p-3">
          INFNET - MIT Full Stack 2025
        </footer>
      </div>
    </Router>
  );
}

export default App
