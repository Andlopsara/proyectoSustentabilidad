import React from 'react';
import '../styles/Login.css';
import logo1 from '../assets/logoSus.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
return (
  <div className="loginContainer">
    <div>
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
export default Login;