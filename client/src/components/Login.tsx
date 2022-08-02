import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { grantAccessToken } from "../store/store";

export default function Login() {
    let navigate = useNavigate();
    let state = useSelector((state: any) => state.loginInfo )
    let dispatch = useDispatch()

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
            navigate('/')
            const accessToken = response.data.data.accessToken;
            dispatch(grantAccessToken(accessToken))
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