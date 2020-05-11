import React from 'react';
import './Swatch.css';

const Swatch = (props) => {
  const style = {
    backgroundColor: '#' + props.color,
  };
  return (
    <div className='swatch'>
      <div className='colorBlock' style={style}></div>
      <h2>#{props.color}</h2>
    </div>
  );
};

export default Swatch;
