import './App.css';
import React from "react";
import ConverterInput from './components/ConverterInput';
import ConverterOutput from './components/ConverterOutput';

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
          <ConverterOutput textOutput={textOutput} />
        </form>  
    </div>
  );
}

export default App;
