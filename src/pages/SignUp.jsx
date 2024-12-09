import React, { useState } from 'react';
import '../styles/SignUp.css'; // Asegúrate de definir este archivo de estilos
import logo2 from '../assets/logoSus1.png';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/home'); // Cambia a la ruta que necesites
  };

  return (
    <div className="signup-container">
      <div className="logo-section">
        <img src={logo2} alt="Logo" className="logo" />
      </div>
      <h1>¡REGÍSTRATE!</h1>
      <form className="signup-form">
        <label htmlFor="name">NOMBRE(S)</label>
        <input type="text" id="name" placeholder="Ingresa tu nombre" />

        <label htmlFor="surname">APELLIDO(S)</label>
        <input type="text" id="surname" placeholder="Ingresa tus apellidos" />

        <label htmlFor="matricula">MATRÍCULA</label>
        <input type="text" id="matricula" placeholder="Ingresa tu matrícula" />

        <label htmlFor="email">CORREO INSTITUCIONAL</label>
        <input type="email" id="email" placeholder="correo@institucion.edu" />

        <label htmlFor="password">CONTRASEÑA</label>
        <input type="password" id="password" placeholder="Crea una contraseña" />

        <label htmlFor="scholarship">TIPO DE BECA</label>
        <select id="scholarship">
          <option value="">Selecciona una opción</option>
          <option value="beca1">Beca 1</option>
          <option value="beca2">Beca 2</option>
        </select>

        <button type="button" className="signup-button" onClick={handleSignUp}>
          ENVIAR
        </button>
      </form>
      <p className="login-text">
        <a href="/login" className="login-link">YA TENGO UNA CUENTA</a>
      </p>
    </div>
  );
}

export default SignUp;
