  import React from 'react';
  import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
  import Home from "./Home";
  import Atlas from "./Atlas";
  import Map from "./Map";
  import Identify from "./Identify";
  import Header from '../components/Header/'

  import './App.css';
  import 'fontsource-roboto';

  const App = () => {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/atlas" element={<Atlas/>} />
          <Route path="/identyfikacja" element={<Identify/>} />
          <Route path="/mapa" element={<Map/>} />
        </Routes>
      </Router>
    );
  }

  export default App;
