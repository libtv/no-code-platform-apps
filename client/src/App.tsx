import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Like from './components/Like';
import './asset/css/styled.css'

function App() {
  return (
    <>
      <Header isLogined={ false }/>
      <Like />
      <Footer />
    </>
  );
}

export default App;
