import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../asset/img/insta.png';
const StyledLink = styled(Link)`
    text-decoration: none;
`

export default function Header({ isLogined } :any) {

    return (
        <div className="main-header">
            <div className="header-item wrap">
                <StyledLink to="/"><li><img src={Logo}/></li></StyledLink>
                <div></div>
                <StyledLink to="/"><li>공지사항</li></StyledLink>
                <StyledLink to="/signIn"><li>회원가입</li></StyledLink>
                {isLogined === false && <StyledLink to="/login"><li>로그인</li></StyledLink>}
                {isLogined && <StyledLink to="/login"><li>로그아웃</li></StyledLink>}
            </div>
        </div>
    )
}