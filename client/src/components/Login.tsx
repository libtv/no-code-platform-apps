import React, { useState } from "react";

export default function Login() {
    const onChange = () => {};

    return (
        <form action="/login" method="post">
            <div className="login-wrap">
                <input type="text" placeholder="아이디" name="id" required/>
                <input type="password" placeholder="비밀번호" name="password" required/>
                <button type="submit">로그인</button>
                
                <label htmlFor="keep"><input type="checkbox" id="keep" name="keep" value="off" />로그인 상태 유지</label>
            </div>
        </form>
    )
}