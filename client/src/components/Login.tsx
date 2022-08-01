import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();

    const [inputs, setInputs] = useState({
        userId: '',
        password: ''
      });
      const { userId, password } = inputs;

    function onChange(e: { target: { name: any; value: any; }; }) {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onLogin = async () => {
        const response = await axios.post(
            'http://localhost:3939/api/login',
            {
              user_id: userId,
              user_pw: password
            }
        )

        if(response.data.result.resultCode === '200') {
            // navigate('/')
            console.log(response.data)
        }

        setInputs({
            userId: '',
            password: '',
        });
    };

    return (
        <div className="login-wrap">
            <input type="text" placeholder="아이디" name="userId" onChange={onChange} value={userId} required/>
            <input type="password" placeholder="비밀번호" name="password" onChange={onChange} value={password} required/>
            <button onClick={onLogin}>로그인</button>
            
            <label htmlFor="keep"><input type="checkbox" id="keep" name="keep" value="off" />로그인 상태 유지</label>
        </div>
    )
}