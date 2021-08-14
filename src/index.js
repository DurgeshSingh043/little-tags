import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
=======
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store, persistor } from './redux/store';
import reportWebVitals from './reportWebVitals';
import UserProvider from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <UserProvider> */}
    <Router>
      <Provider store={store}>
        <ToastProvider>
          {/* <PersistGate persistor={persistor}> */}
          <App />
          {/* </PersistGate> */}
        </ToastProvider>
      </Provider>
    </Router>
    {/* </UserProvider> */}
>>>>>>> a3d596608d3dd3fb79ae8212c67581a3ad1238b7
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
