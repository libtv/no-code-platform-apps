import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Like from './components/Like';
import Login from './components/Login';
import HomeList from './components/Home';
import CreateUser from './components/CreateUser';
import Write from './components/Write';
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
    <div className='App'>
      <BrowserRouter>
				<Header isLogined={ false }/>
				<Routes>
					<Route path="/" element={<HomeList />}></Route>
          <Route path="/login" element={<Login />}></Route>
					<Route path="/signIn" element={<CreateUser 
            userId={userId}
            password={password}
            onChange={onChange}
            onCreate={onCreate}
          />}></Route>
          <Route path="/write" element={<Write />}></Route>
					<Route path="*" element={<Like />}></Route>
				</Routes>
        <Footer />
			</BrowserRouter>
    </div>
  );
}

export default App;
