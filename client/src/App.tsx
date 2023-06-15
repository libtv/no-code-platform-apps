import React from "react";
import { Route, Routes } from "react-router-dom";
import "./asset/css/styled.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyApp from "./route/myapp/MyApp";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MyApp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
