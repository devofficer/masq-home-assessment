import React from 'react';
import ColorPicker from './ColorPicker';
const Home: React.FC = () => {
  return (
    <div className="center-container">
      <div>
        <h2>Welcome to Electron!</h2>
        <ColorPicker />
      </div>
    </div>
  );
};

export default Home;
