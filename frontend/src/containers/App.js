  import React from 'react';
  import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
  import Home from "../Home";
  import Atlas from "../Atlas";
  import Borowiki from "../Borowiki";
  import Map from "../Map";
  import Header from '../components/Header/'

  import './App.css';
  import 'fontsource-roboto';

  const App = () => {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/atlas" element={<Atlas/>} >
            <Route path="/borowiki" element={<Borowiki/>} />
          </Route>
          <Route path="/mapa" element={<Map/>} />
          
        </Routes>
      </Router>
    );
  }

  export default App;
