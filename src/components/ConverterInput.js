import React from 'react';

const ConverterInput = ({ textInput, conversionMode, handleTextareaChange, handleRadioChange })=> {
  return (
    <div>
      <div className="form-control form-control__text">
        <label htmlFor="text">Text to be converted:</label>
        <textarea
          id="text"
          onChange={handleTextareaChange}
          value={textInput}
        />
      </div>
      <div className="form-control form-control__radio">
        <input
          type="radio"
          name="conversion"
          id="conversion-0"
          value="lowercase"
          checked={conversionMode === "lowercase"}
          onChange={handleRadioChange}
        />
        <label htmlFor="conversion-0">Convert text to lowercase</label>
      </div>
      <div className="form-control form-control__radio">
        <input
          type="radio"
          name="conversion"
          id="conversion-1"
          value="uppercase"
          checked={conversionMode === "uppercase"}
          onChange={handleRadioChange}
        />
        <label htmlFor="conversion-1">Convert text to uppercase</label>
      </div>
      <input type="submit" value="Submit" />
    </div>
  )
}

export default ConverterInput;