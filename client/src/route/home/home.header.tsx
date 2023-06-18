import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AssetImage from "../../asset/asset-image";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function HomeHeader() {
  return (
    <div className="home-header-re">
      <div className="home-header ">
        <div className="home-header-content">
          <img className="home-header-content-img" src={AssetImage.app_logo}></img>
        </div>
      </div>
    </div>
  );
}
