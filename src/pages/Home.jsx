import React from 'react';
import '../styles/Home.css'; // Asegúrate de que este archivo exista en tu proyecto

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <button className="menu-button">☰</button>
        <h1 className="logo">CS</h1>
      </header>

      <main className="home-main">
        <div className="qr-container">
          <img
            src="/path-to-your-qr-code-image.png" // Cambia esta ruta a la imagen correcta
            alt="Código QR"
          />
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
