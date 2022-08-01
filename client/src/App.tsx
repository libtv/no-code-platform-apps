import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Like from './components/Like';
import Login from './components/Login';
import HomeList from './components/Home';
import CreateUser from './components/CreateUser';
import Write from './components/Write';
import './asset/css/styled.css'
import axios from 'axios';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
				<Header isLogined={ false }/>
				<Routes>
					<Route path="/" element={<HomeList />}></Route>
          <Route path="/login" element={<Login />}></Route>
					<Route path="/signIn" element={<CreateUser />}></Route>
          <Route path="/write" element={<Write />}></Route>
					<Route path="*" element={<Like />}></Route>
				</Routes>
        <Footer />
			</BrowserRouter>
    </div>
  );
}

export default App;
