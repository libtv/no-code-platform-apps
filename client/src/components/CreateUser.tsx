import React, { useState } from "react";

export default function CreateUser({ userId, password, onChange, onCreate} : any) {

    return (
        <div>
            <input 
                name="userId"
                placeholder="아이디"
                onChange={onChange}
                value={userId}
            />
            <input
                name="pw"
                placeholder="비밀번호"
                onChange={onChange}
                value={password}
            />
            <button onClick={onCreate}>회원가입</button>
        </div>
    );
}