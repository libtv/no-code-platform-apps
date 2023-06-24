import { Button, InputLabel, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect, useMemo } from "react";
import ComplexImageButton from "../../components/ImageButton.mui";
import ComplexImageList from "../../components/ImageList.mui";
import ComplexModal from "../../components/Modal.mui";
import { APP_IMG_LIST } from "../../const/common";
import { HomeContext } from "./home.provider";

function Modal({ children }: any) {
  const { handleOpen, handleClose, states, onClick, onChange, uuid, createAppList, onClick2 } = useContext(HomeContext);
  const { open, refresh, appName, appList } = states;

  return (
    <ComplexModal open={open} handleClose={handleClose}>
      <div className="home-header-re">
        <div className="home-header">
          <div className="home-header-content">앱 생성하기</div>
        </div>
      </div>
      <div className="home-body">
        <TextField label="앱 이름을 입력하세요." id="home-name" variant="standard" sx={{ width: "100%", margin: "0 0 20px 0" }} onChange={onChange} />
        <TextField label="앱 주소를 입력하세요." id="home-page" variant="standard" sx={{ width: "100%", margin: "0 0 20px 0" }} value={uuid} />
        <InputLabel id="home-image-label">이미지를 선택하세요. </InputLabel>
        <Grid2 container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }}>
          <img src={APP_IMG_LIST.items[1].src} width={"300"}></img>
          <ComplexImageList list={APP_IMG_LIST}></ComplexImageList>
        </Grid2>
        <Button variant="contained" color="success" sx={{ width: "100%" }} onClick={onClick}>
          제출하기
        </Button>
      </div>
    </ComplexModal>
  );
}

export default React.memo(Modal);
