import React from 'react';
import '../styles/Button.css'; // Crea este archivo si necesitas estilos específicos

const Button = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
