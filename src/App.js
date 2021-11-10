import React from "react";
import { Routes ,Route } from 'react-router-dom';

import ErrorBoundary from "./components/ErrorBondary";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Show from "./pages/Show.jsx";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ErrorBoundary>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/show/:id" element={<Show/>} />
        {/* <Route>
          <Redirect from="/home" to="/"></Redirect>
        </Route>  */}
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
