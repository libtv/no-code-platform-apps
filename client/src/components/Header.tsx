import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../asset/img/insta.png';
import { distroyAccessToken } from "../store/store";

const StyledLink = styled(Link)`
    text-decoration: none;
`

export default function Header() {
    let state = useSelector((state: any) => state.loginInfo )
    let dispatch = useDispatch();

    const onLogout = () => {
        dispatch(distroyAccessToken())
    }

    return (
        <div className="main-header">
            <div className="header-item wrap">
                <StyledLink to="/"><li><img src={Logo}/></li></StyledLink>
                <div></div>
                <StyledLink to="/"><li>공지사항</li></StyledLink>
                <StyledLink to="/signIn"><li>회원가입</li></StyledLink>
                {state.accessToken.length <= 0 && <StyledLink to="/login"><li>로그인</li></StyledLink>}
                {state.accessToken.length > 0 && <StyledLink to="/" onClick={onLogout}><li>로그아웃</li></StyledLink>}
            </div>
        </div>
    )
}