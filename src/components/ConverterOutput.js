import React from 'react';

const ConverterOutput = ({ textOutput }) => {
  return (
    <div className="result-wrapper form-control form-control__text">
      <label htmlFor="result">Converted text:</label>
      <output id="result">{textOutput}</output>
    </div>
  )
}

export default ConverterOutput;