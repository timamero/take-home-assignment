import './App.css';
import React from "react";
import ConverterInput from './components/ConverterInput';

function App() {
  const [textInput, setTextInput] = React.useState('Here is some example text.');
  const [conversionMode, setConversionMode] = React.useState('lowercase');
  const [textOutput, setTextOutput] = React.useState('');

  const handleRadioChange = event => {
    setConversionMode(event.target.value);
  }

  const handleTextareaChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (conversionMode === 'lowercase') {
      setTextOutput(textInput.toLowerCase());
    } else if (conversionMode === 'uppercase') {
      setTextOutput(textInput.toUpperCase());
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
        <form onSubmit={handleSubmit}>
          <ConverterInput 
            textInput={textInput} 
            conversionMode={conversionMode} 
            handleTextareaChange={handleTextareaChange} 
            handleRadioChange={handleRadioChange} 
          />
          <div className="result-wrapper form-control form-control__text">
            <label htmlFor="result">Converted text:</label>
            <output id="result">{textOutput}</output>
          </div>
        </form>  
    </div>
  );
}

export default App;
