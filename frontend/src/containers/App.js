  import React from 'react';
  import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
  import Header from '../components/Header/'
  import Home from "../pages/Home";
  import Atlas from "../pages/atlas/Index";
  import Map from "../pages/Map";
  import Identify from "../pages/Identify";
  import Info from "../pages/atlas/Info";
  import Mushrooms from "../pages/atlas/Mushrooms"

  import './App.css';
  import 'fontsource-roboto';

  const App = () => {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="atlas" element={<Atlas/>} />
            <Route path="atlas/:slug" element={<Mushrooms />} />
              <Route path="atlas/:slug/:id" element={<Info />} />
          <Route path="identyfikacja" element={<Identify/>} />
          <Route path="mapa" element={<Map/>} />
        </Routes>
      </Router>
    );
  }

  export default App;
