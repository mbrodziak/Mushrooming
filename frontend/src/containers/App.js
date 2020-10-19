  import React from 'react';
  import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
  import Header from '../components/Header/'
  import Home from "../pages/Home";
  import Atlas from "../pages/Atlas";
  import Map from "../pages/Map";
  import Identify from "../pages/Identify";
  import Borowiki from "../pages/categories/Borowiki";
  import Podgrzybki from "../pages/categories/Podgrzybki"
  import Maslaki from "../pages/categories/Maslaki";
  import Muchomory from "../pages/categories/Muchomory";

  import './App.css';
  import 'fontsource-roboto';

  const App = () => {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="atlas" element={<Atlas/>} />
          <Route path="atlas/borowiki" element={<Borowiki />} />
          <Route path="atlas/podgrzybki" element={<Podgrzybki />} />
          <Route path="atlas/maslaki" element={<Maslaki />} />
          <Route path="atlas/muchomory" element={<Muchomory />} />
          <Route path="identyfikacja" element={<Identify/>} />
          <Route path="mapa" element={<Map/>} />
        </Routes>
      </Router>
    );
  }

  export default App;
