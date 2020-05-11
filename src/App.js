import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import Swatch from './components/Swatch';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  const [hex, setHex] = useState([]);
  const [text, setText] = useState();
  useEffect(() => {
    if (hex.length === 3) {
      let newColor = hex.join('');
      let newColors = [...colors, newColor];
      setColors(newColors);
      setHex([]);
    }
  }, [hex]);

  useEffect(() => {
    document.getElementById('auraInput').focus();
  }, []);

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    for (let n = 0, l = inputText.length; n < l; n++) {
      let newHex = Number(inputText.charCodeAt(n)).toString(16);
      let newHexArr = [...hex, newHex];
      setHex(newHexArr);
    }
  };

  return (
    <div className='App'>
      <div id='titlecontainer'>
        <h1 id='title'>What is</h1>
        <h1 id='title'>Your Name's Aura</h1>
        <h1 id='title'>?</h1>
      </div>
      <h2 id='directions'>Enter Text Here</h2>
      <TextInput func={handleChange} />
      <div id='swatchPalette'>
        {colors.map((color) => {
          return <Swatch color={color} />;
        })}
      </div>
      <p id='colophon'>
        Site by Paal Williams | Design by{' '}
        <a href='https://jakehansondesign.com/' target='_blank'>
          Jake Hanson
        </a>
      </p>
    </div>
  );
}

export default App;
