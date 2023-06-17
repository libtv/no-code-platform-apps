import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React from "react";

function ImageList_MUI(props: any) {
  return (
    <ImageList sx={{ width: props.list.width, height: props.list.height }} cols={5} rowHeight={164}>
      {props.list.items.map((item: any, _i: any) => (
        <ImageListItem key={item.src + _i}>
          <img src={`${item.src}`} alt={item.title} width={item.width} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default React.memo(ImageList_MUI);
