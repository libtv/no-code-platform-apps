import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Like from './components/Like';
import Login from './components/Login';
import HomeList from './components/Home';
import './asset/css/styled.css'

function App() {
  return (
    <>
      <Header isLogined={ false }/>
      <HomeList />
      <Login />
      <Like />
      <Footer />
    </>
  );
}

export default App;
