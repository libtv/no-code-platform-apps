import React from "react";
import { Route, Routes } from "react-router-dom";
import "./asset/css/styled.css";
import Home from "./route/home/home";
import { HomeProvider } from "./route/home/home.provider";
import HomeHeader from "./route/home/home.header";
import MyAppHeader from "./route/myapp/myapp.header";
import MyAppMenu from "./route/myapp/myapp.menu";
import { MyAppProvider } from "./route/myapp/myapp.provider";
import { DefaultProvider } from "./const/common";
import MyappModal from "./route/myapp/myapp.modal";
import HomeModal from "./route/home/home.modal";

function App() {
  return (
    <DefaultProvider>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div className="common-wrap">
                <HomeProvider>
                  <HomeModal />
                  <HomeHeader />
                  <Home />
                </HomeProvider>
              </div>
            }
          ></Route>
          <Route
            path="/apps/:apps"
            element={
              <MyAppProvider>
                <MyappModal></MyappModal>
                <MyAppHeader></MyAppHeader>
                <MyAppMenu></MyAppMenu>
              </MyAppProvider>
            }
          ></Route>
        </Routes>
      </div>
    </DefaultProvider>
  );
}

export default App;
