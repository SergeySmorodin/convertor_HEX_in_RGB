import React from 'react';

const ColorInput = ({ value, onChange, displayText, isValid }) => {
  return (
    <label className="container">
      <input
        type="text"
        className="input-field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Введите код цвета..."
        maxLength={7}
      />
      <span className={`result ${!isValid ? 'error' : ''}`}>
        {displayText}
      </span>
    </label>
  );
};

export default ColorInput;