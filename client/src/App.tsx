import React from "react";
import { Route, Routes } from "react-router-dom";
import "./asset/css/styled.css";
import MyApp from "./route/home/home";
import { MyAppProvider } from "./route/home/home.provider";
import MyAppHeader from "./route/home/home.header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="common-wrap">
              <MyAppProvider>
                <MyAppHeader />
                <MyApp />
              </MyAppProvider>
            </div>
          }
        ></Route>
        <Route
          path="/apps"
          element={
            <div className="common-wrap">
              <MyAppProvider>
                <MyAppHeader />
                <MyApp />
              </MyAppProvider>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
