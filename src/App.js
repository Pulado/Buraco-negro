import React, { useState, useEffect } from 'react';
import './App.css';

const generateStars = () => {
  const stars = [];
  for (let i = 0; i < 1500; i++) {
    const style = {
      position: 'absolute',
      top: `${Math.random() * 99.5}%`,
      left: `${Math.random() * 99.5}%`,
      width: '1.5px',
      height: '1.5px',
      backgroundColor: 'white',
      animation: 'blink 1s infinite',
      animationDelay: `${Math.random() * 2}s`,
    };
    stars.push(<div key={i} style={style}></div>);
  }
  return stars;
};

const RegistrationPage = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <div>
      {stars}
      <div className="pulsing-ball"></div>
      <div className="rectangle">
        <h1>SEJA BEM-VINDO</h1>
        <h2>ao nosso buraco negro</h2>
        <p>
        Imagine um buraco negro vibrante, girando no vazio do espaço com uma elegância quase casual. No centro, um laranja profundo e incandescente brilha como se tivesse devorado um sol inteiro no café da manhã, emanando um calor que desafia a escuridão ao redor. Ao seu redor, uma borda azul neon resplandece, cintilando como luzes de festa em uma rave cósmica, iluminando o espaço como se estivesse vestindo o traje mais chamativo para uma noite de gala galáctica. Ele gira preguiçosamente, como quem saboreia um milkshake cósmico, absorvendo estrelas, planetas e poeira com a serenidade de quem está apenas cumprindo seu papel no vasto teatro do universo.

Mas, ao contrário da imagem aterrorizante que os buracos negros costumam evocar, este parece quase... relaxado. É como se ele estivesse ali apenas cumprindo sua missão cósmica, sem pressa, sem drama, piscando de vez em quando, talvez se perguntando: "Por que tanto alarde? É só mais um dia comum no espaço." Seu movimento parece suave, quase brincalhão, e sua presença, apesar de poderosa, não ameaça é apenas parte do grande ciclo universal. As galáxias ao redor giram como espectadores distantes, assistindo a esse buraco negro despreocupado continuar sua dança tranquila através da eternidade.
        </p>
      </div>

    </div>
  );
};

export default RegistrationPage;
