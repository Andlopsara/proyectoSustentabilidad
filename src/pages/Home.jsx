import React from 'react';
import logo2 from '../assets/logoSus1.png';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <button className="menu-button">☰</button>
        <div className="logoSeccion">
        <img src={logo2} alt="Logo" className="logo" />
      </div>
      </header>

      <main className="home-main">
        <div className="qrImagenr">
        <img src="/assets/qrImagen.png" alt="qrImage" />

          <button className="scan-button">Permitir el acceso a la cámara</button>
        </div>

        <div className="instructions">
          <p>Utiliza tu cámara para escanear el código QR</p>
          <p>Revisa que los datos estén correctos</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
