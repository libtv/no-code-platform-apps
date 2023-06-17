import React from "react";
import { Route, Routes } from "react-router-dom";
import "./asset/css/styled.css";
import MyApp from "./route/myapp/myapp";
import { MyAppProvider } from "./route/myapp/myapp.provider";
import MyAppHeader from "./route/myapp/myapp.header";

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
      </Routes>
    </div>
  );
}

export default App;
