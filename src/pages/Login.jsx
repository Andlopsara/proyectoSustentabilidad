import React from 'react';
import '../styles/Login.css';
import logo1 from '../assets/logoSus1.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home'); // Ahora navega a Home
  };

  return (
    <div className="login-container">
      <div className="logo-section">
        <img src={logo1} className="logo" alt="logo" />
      </div>
      <h1>¡INICIA SESIÓN!</h1>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <label htmlFor="matricula">MATRICULA</label>
        <input
          type="text"
          id="matricula"
          name="matricula"
          placeholder="Ingresa tu matrícula"
        />

        <label htmlFor="password">CONTRASEÑA</label>
        <div className="password-container">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => {}}
          >
            Mostrar
          </button>
        </div>

        <a href="#forgot-password" className="forgot-password-link">
          ¿Has olvidado tu contraseña?
        </a>

        <button type="submit" className="login-button">
          INICIAR SESIÓN
        </button>
      </form>
      <p className="signup-text">
        Si eres nuevo, <a href="/signUp" className="signup-link">REGÍSTRATE</a>
      </p>
      <p className="go-back-text">
        <a href="/dashboard" className="go-back-link"> ← Regresar</a>
      </p>
    </div>
  );
}

export default Login;
