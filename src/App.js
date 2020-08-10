import React, { useState, useEffect } from 'react';
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
        <h1 className='title'>
          <span id='cutout'>WORD</span>
          <span id='gradient'>AURA</span>
        </h1>
      </div>
      <h2 id='directions'>
        Enter your text here and witness as the letters are turned, alchemy like
        into a beautiful color palette
      </h2>
      <div className='inputcontainer box'>
        <input
          type='text'
          name=''
          id='auraInput'
          onChange={handleChange}
          value={text}
          placeholder='Enter Text Here'
        />
      </div>
      <div id='swatchPalette'>
        {colors.map((color) => {
          return <Swatch color={color} />;
        })}
      </div>
      <div id='codecontainer'>
        <code>cssGradientGeneration = "comingSoon";</code>
      </div>
      <p id='colophon'>
        Site by{' '}
        <a href='https://paaa.al' target='_blank'>
          Paal Williams
        </a>{' '}
        | Design by
        <a href='https://jakehansondesign.com/' target='_blank'>
          Jake Hanson
        </a>
      </p>
    </div>
  );
}

export default App;
