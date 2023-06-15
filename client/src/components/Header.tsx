import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../asset/img/insta.png";
import { distroyAccessToken } from "../store/store";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Header() {
  return (
    <div className="main-header">
      <div className="header-item wrap"></div>
    </div>
  );
}
