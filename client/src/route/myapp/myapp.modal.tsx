import ComplexImageButton from "../../components/ImageButton.mui";
import ComplexImageList from "../../components/ImageList.mui";
import ComplexModal from "../../components/Modal.mui";
import { Button, InputLabel, TextField } from "@mui/material";
import React, { useContext, useEffect, useMemo } from "react";
import { MyAppContext } from "./myapp.provider";

function Modal({ children }: any) {
  const { states, myAppModalOpen, myAppModalClose, handleClose, f0Click } = useContext(MyAppContext);
  const { myapp_header_modal, appList, open } = states;

  return (
    <ComplexModal open={open} handleClose={handleClose} height={"1000px"}>
      <div className="myapp-modal-header-re">
        <div className="myapp-modal-header">
          <div className="myapp-modal-content">폼 생성하기</div>
        </div>
      </div>
      <div className="myapp-modal-body">
        <TextField label="생성할 폼 제목을 입력하세요." id="myapp-modal-form-name" variant="standard" sx={{ width: "100%", margin: "0 0 20px 0" }} />
        <p className="off" onClick={f0Click}>
          옵션
        </p>
        <div id="my-app-modal-options" className="off">
          <TextField label="테이블 명" id="myapp-modal-table-name" variant="standard" sx={{ width: "100%", margin: "0 0 20px 0" }} />
          <TextField label="키 필드명" id="myapp-modal-key-name" variant="standard" sx={{ width: "100%", margin: "0 0 20px 0" }} />
          <TextField label="표시필드명" id="myapp-modal-filed-name" variant="standard" sx={{ width: "100%", margin: "0 0 20px 0" }} />
        </div>
        <Button variant="contained" color="success" sx={{ width: "100%", position: "absolute", bottom: 0 }}>
          제출하기
        </Button>
      </div>
    </ComplexModal>
  );
}

export default React.memo(Modal);
