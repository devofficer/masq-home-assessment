import React, { useState } from 'react';
import Compact from '@uiw/react-color-compact';
import '../styles/main.scss';

const ColorPicker: React.FC = ( ) => {
  const [selectedColor, setSelectedColor] = useState<string>('#ffffff');

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setSelectedColor(color);
    window.electronapi.sendColorToMain(color);
  };


    return (
      <Compact
        color={selectedColor}

        className='color-picker'
        onChange={(color) => {
          setSelectedColor(color.hex);
          window.electronapi.sendColorToMain(color.hex);
        }}
      />
    );

};

export default ColorPicker;
