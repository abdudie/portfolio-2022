import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Header from "./components/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from "./components/Page1/Page1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
