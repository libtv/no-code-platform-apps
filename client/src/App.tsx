import React from "react";
import { Route, Routes } from "react-router-dom";
import "./asset/css/styled.css";
import MyApp from "./route/home/home";
import { HomeProvider } from "./route/home/home.provider";
import HomeHeader from "./route/home/home.header";
import MyAppHeader from "./route/myapp/myapp.header";
import MyAppMenu from "./route/myapp/myapp.menu";
import { MyAppProvider } from "./route/myapp/myapp.provider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="common-wrap">
              <HomeProvider>
                <HomeHeader />
                <MyApp />
              </HomeProvider>
            </div>
          }
        ></Route>
        <Route
          path="/apps/:apps"
          element={
            <MyAppProvider>
              <MyAppHeader></MyAppHeader>
              <MyAppMenu></MyAppMenu>
            </MyAppProvider>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
