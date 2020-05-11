import React from 'react';
import './TextInput.css';

const TextInput = (props) => {
  return (
    <div className='box'>
      <textarea id='auraInput' onChange={props.func}></textarea>
    </div>
  );
};

export default TextInput;
