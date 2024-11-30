import React from 'react';

function Login() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form>
        {/* Formulario de login */}
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
