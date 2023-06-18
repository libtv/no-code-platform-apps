import React, { useContext, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { MyAppContext } from "./myapp.provider";

function MyAppHeader() {
  const { states, myAppModalOpen, myAppModalClose } = useContext(MyAppContext);
  const { myapp_header_modal } = states;

  return (
    <div className="myapp-header ">
      <div className="myapp-header-content">
        <div className="myapp-header-content-ul">
          <AddIcon className="myapp-header-content-ul-icon" onClick={myAppModalOpen}></AddIcon>
          <EditIcon className="myapp-header-content-ul-icon"></EditIcon>
          {myapp_header_modal && (
            <>
              <div className="myapp-header-content-ul-modal">
                <div className="modal-close-group">
                  <CloseIcon className="modal-close-group-btn" onClick={myAppModalClose}></CloseIcon>
                </div>
                <div className="modal-button-group">
                  <div className="modal-button-group-btn">새로만들기</div>
                  <div className="modal-button-group-btn">REST API</div>
                  <div className="modal-button-group-btn">액셀파일</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(MyAppHeader);
