import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store()}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
