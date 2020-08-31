import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './Configurations/StateProvider';
import reducer, { initialState } from './Configurations/Reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);