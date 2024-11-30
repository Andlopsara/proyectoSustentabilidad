import React from 'react';
import '../styles/Home.css';

export const Home = () => {
  return (
    <div className="home-container">
      <div>
        <p>BIENVENIDO(A)</p>
      </div>
      <div className="botones">
        <button className="botonL">INICIAR SESIÓN</button>
        <button className="botonR">REGISTRARME</button>
      </div>
    </div>
  );
};

export default Home;
