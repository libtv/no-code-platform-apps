import React, { useState } from "react";

export default function Login() {
    const onChange = () => {};

    return (
        <div>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button type="submit">로그인</button>
        </div>
    )
}