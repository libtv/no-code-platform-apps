import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AssetImage from "../../asset/asset-image";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function MyAppHeader() {
  return (
    <div className="myapp-header-re">
      <div className="myapp-header ">
        <div className="myapp-header-content">
          <img className="myapp-header-content-img" src={AssetImage.app_logo}></img>
        </div>
      </div>
    </div>
  );
}
