import { Button, InputLabel, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect, useMemo } from "react";
import ComplexImageButton from "../../components/ImageButton.mui";
import ComplexImageList from "../../components/ImageList.mui";
import ComplexModal from "../../components/Modal.mui";
import { APP_IMG_LIST } from "../../const/common";
import { HomeContext } from "./home.provider";

function Home({ children }: any) {
  const { handleOpen, handleClose, states, onClick, onChange, uuid, createAppList, onClick2 } = useContext(HomeContext);
  const { open, refresh, appName, appList } = states;

  console.log(appList);

  return (
    <div className="home-body">
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

      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 8, lg: 10, xl: 12 }}>
        <Grid2 xs={2} sm={2} md={2} key={1}>
          <ComplexImageButton url={APP_IMG_LIST.items[0].src} width="200px" onClick={handleOpen}>
            앱생성
          </ComplexImageButton>
        </Grid2>
        {appList.map((v: any, idx: any) => {
          return (
            <Grid2 xs={2} sm={2} md={2} key={idx}>
              <ComplexImageButton url={v.APP_IMG.toString("utf-8")} width="200px" onClick={() => onClick2(v.APP_UUID)}>
                {v.APP_NAME}
              </ComplexImageButton>
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}

export default React.memo(Home);
