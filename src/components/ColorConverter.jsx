import { useState, useEffect } from 'react';
import ColorInput from './ColorInput'; 

const ColorConverter = () => {
  const [inputValue, setInputValue] = useState('#9921ff');
  const [displayText, setDisplayText] = useState('rgb(153, 33, 255)');
  const [isValid, setIsValid] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#9921ff');

  useEffect(() => {
    if (inputValue.length !== 7) return;

    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    if (!hexRegex.test(inputValue)) {
      setDisplayText('Ошибка');
      setIsValid(false);
      return;
    }

    const r = parseInt(inputValue.slice(1, 3), 16);
    const g = parseInt(inputValue.slice(3, 5), 16);
    const b = parseInt(inputValue.slice(5, 7), 16);

    setDisplayText(`rgb(${r}, ${g}, ${b})`);
    setIsValid(true);
    setBackgroundColor(inputValue);
  }, [inputValue]);

  return (
    <div className="color-converter" style={{ backgroundColor }}>
      <ColorInput
        value={inputValue}
        onChange={setInputValue}
        displayText={displayText}
        isValid={isValid}
      />
    </div>
  );
};

export default ColorConverter;