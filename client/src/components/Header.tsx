import React from "react";

export default function Header({ isLogined } :any) {

    return (
        <div className="main-header">
            <div className="header-item">로고 공지사항 회원가입 { isLogined ? '로그아웃' : '로그인' }</div>
        </div>
    )
}