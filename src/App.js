import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
