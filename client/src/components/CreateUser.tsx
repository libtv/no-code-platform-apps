import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
    let navigate = useNavigate();

    const [inputs, setInputs] = useState({
      userId: '',
      password: '',
      userName: '',
      userEmail: '',
    });
    const { userId, password, userName, userEmail } = inputs;
    function onChange(e: { target: { name: any; value: any; }; }) {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    }
  
    const onCreate = async () => {
      const response = await axios.post(
        'http://localhost:3939/api/account',
        {
          user_id: userId,
          user_pw: password,
          user_name: userName,
          user_email: userEmail
        }
      )
  
      if(response.data.result.resultCode === '200') {
        navigate('/')
      }
      
      console.log(response.data)
  
      setInputs({
        userId: '',
        password: '',
        userName: '',
        userEmail: '',
      });
      // nextId.current += 1;
    };

    return (
        <div>
            <input 
                name="userId"
                placeholder="아이디"
                onChange={onChange}
                value={userId}
            />
            <input
                name="password"
                placeholder="비밀번호"
                onChange={onChange}
                value={password}
            />
            <input 
                name="userName"
                placeholder="이름"
                onChange={onChange}
                value={userName}
            />
            <input 
                name="userEmail"
                placeholder="이메일"
                onChange={onChange}
                value={userEmail}
            />
            <button onClick={onCreate}>회원가입</button>
        </div>
    );
}