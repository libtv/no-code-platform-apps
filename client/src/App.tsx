import React from "react";
import { Route, Routes } from "react-router-dom";
import "./asset/css/styled.css";
import MyApp from "./route/myapp/MyApp";
import MyAppHeader from "./route/myapp/MyAppHeader";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="common-wrap">
              <MyAppHeader />
              <MyApp />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
