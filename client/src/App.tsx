import React from "react";
import { Route, Routes } from "react-router-dom";
import "./asset/css/styled.css";
import MyApp from "./route/myapp/MyApp";
import { MyAppProvider } from "./route/myapp/MyAppProvider";
import MyAppHeader from "./route/myapp/MyAppHeader";

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
