import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logoU.png';
import logo1 from '../assets/logoSus.png';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí puedes agregar lógica de autenticación antes de redirigir
    navigate('/login');
  };
return (
  <div className="homeContainer">
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo1} className="App-logo1" alt="logo" />
    </div>
    <div>
      <p>BIENVENIDO(A)</p>
    </div>
    <div className="botones">
     <button className="botonL" onClick={handleLogin}>INICIAR SESIÓN</button>
      <button className="botonR">REGISTRARME</button>
    </div>
  </div>
);
}
export default Home;