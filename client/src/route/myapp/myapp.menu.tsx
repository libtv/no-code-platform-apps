import React, { useContext } from "react";
import { MyAppContext } from "./myapp.provider";

export default function MyAppMenu() {
  const { states, myAppModalOpen, myAppModalClose } = useContext(MyAppContext);
  const { myapp_header_modal, appList } = states;

  return (
    <div className="myapp-menu">
      <div className="myapp-menu-title">
        <div className="myapp-menu-title-h2">{appList.length > 0 && appList[0].APP_NAME}</div>
      </div>
      <div className="myapp-menu-content"></div>
    </div>
  );
}
