import React, { useState } from 'react';
import { darken, getLuminance } from 'polished';
import Compact from '@uiw/react-color-compact';
import '../styles/main.scss';

const ColorPicker: React.FC = ( ) => {
  const [selectedColor, setSelectedColor] = useState<string>('#ffffff');

    return (
      <Compact
        color={selectedColor}

        className='color-picker'
        onChange={(color) => {
          setSelectedColor(color.hex);
          window.electronapi.sendColorToMain(color.hex);
          document.body.style.color = getLuminance(color.hex) > 0.5 ? 'black' : 'white';
        }}
      />
    );

};

export default ColorPicker;
