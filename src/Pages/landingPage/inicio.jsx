import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/auth');
  };

  return (
    <section id="inicio" className="hero-section">
      <h2 className="hero-title">
        Conectando vidas. Transformando histórias.<br />
        Adote com um clique.
      </h2>
      <div className="hero-buttons">
        <button className="primary-btn" onClick={handleStartClick}>Comece Agora</button>
        <button className="secondary-btn">Baixar o App</button>
      </div>
    </section>
  );
};

export default Inicio;