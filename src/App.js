import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import Swatch from './components/Swatch';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  const [hex, setHex] = useState([]);
  const [text, setText] = useState();

  useEffect(() => {
    document.getElementById('auraInput').focus();
  }, []);

  const convertToHex = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    for (let n = 0, l = inputText.length; n < l; n++) {
      let newHex = Number(inputText.charCodeAt(n)).toString(16);
      let newHexArr = [...hex, newHex];
      setHex(newHexArr);
    }
    if (hex.length === 3) {
      let newColor = hex.join('');
      let newColors = [...colors, newColor];
      setColors(newColors);
      setHex([]);
    }
  };

  return (
    <div className='App'>
      <h1 id='title'>Color Palette Generator</h1>
      <TextInput func={convertToHex} />
      <div id='swatchPalette'>
        {colors.map((color) => {
          return <Swatch color={color} />;
        })}
      </div>
    </div>
  );
}

export default App;
