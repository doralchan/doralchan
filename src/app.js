import React from 'react';
import Profile from './profile.svg';

import './app.css';

function App() {
  return (
    <div className='app'>
      <div className='app-greeting'>
        <h4 className='app-greeting-text'>@doralchan</h4>
        <img src={ Profile } className='app-greeting-image' alt='profile' />
      </div>
    </div>
  );
}

export default App;
