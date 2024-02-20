import React from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import {Routes, Route} from "react-router-dom";
import './App.css'

function App() {

  return (
    <div>
      <Routes><Route path="/" element={<QuestionBox />} />
      <Route path="/result/:id" element={<Result />} />
      <Route path="*"  element={<center><h1>404 page not found</h1></center>} />
      </Routes>
    </div>
  );
}

export default App;