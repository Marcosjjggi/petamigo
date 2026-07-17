import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth');
  };

  return (
    <header className="landing-header">
      <div className="header-left">
        <img src={logo} alt="Logo Pet Amigo" className="logo" />
        <h1>Pet Amigo</h1>
      </div>

      <nav className="header-center">
        <a href="#inicio">Início</a>
        <a href="#quem-somos">Quem Somos</a>
        <a href="#funcionalidades">Funcionalidades</a>
        <a href="#blog">Blog</a>
        <a href="#sobre">Sobre</a>
      </nav>

      <div className="header-right">
        <button className="login-button" onClick={handleLoginClick}>Login</button>
      </div>
    </header>
  );
};

export default Header;
