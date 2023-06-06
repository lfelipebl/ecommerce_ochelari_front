import React, { useState, useEffect } from 'react';

const RotatingWords = () => {
  const words = ["Exclusividad", "Estilo", "Elegancia", "Moda"]; // Agrega las palabras que deseas rotar
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Cambia el tiempo de rotación aquí (en milisegundos)

    return () => {
      clearInterval(intervalId);
    };
  }, [words.length]);

  useEffect(() => {
    setCurrentWord(words[currentWordIndex]);
  }, [currentWordIndex, words]);

  return <div>{currentWord}</div>;
};

export default RotatingWords;