import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './asset/css/styled.css';
import CreateUser from './components/CreateUser';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeList from './components/Home';
import Like from './components/Like';
import Login from './components/Login';
import Write from './components/Write';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<HomeList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signIn" element={<CreateUser />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="*" element={<Like />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
