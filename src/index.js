import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PlayerContextProvider } from './components/context';

ReactDOM.render(
  <PlayerContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PlayerContextProvider>,
  document.getElementById('root')
);