import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Like from './components/Like';
import Login from './components/Login';
import HomeList from './components/Home';
import CreateUser from './components/CreateUser';
import './asset/css/styled.css'

function App() {
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

  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    setInputs({
      userId: '',
      password: ''
    });
    // nextId.current += 1;
  };

  return (
    <>
      <Header isLogined={ false }/>
      <CreateUser 
        userId={userId}
        password={password}
        onChange={onChange}
        onCreate={onCreate}

      />
      <HomeList />
      <Login />
      <Like />
      <Footer />
    </>
  );
}

export default App;
