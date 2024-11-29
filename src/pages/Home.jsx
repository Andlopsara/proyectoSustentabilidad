import React from 'react';
import '../styles/Home.css';

export const Home = () => {
  return (
    <div className="home-container">
      <div>
        <p>BIENVENIDO(A)</p>
      </div>
      <div className="buttons">
        <button className="btn-login">INICIAR SESIÓN</button>
        <button className="btn-register">REGISTRARME</button>
      </div>
    </div>
  );
};

export default Home;
