import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* import store */
import {createStore} from 'redux';
import myReducer from './reducers/index';
import {Provider} from 'react-redux';
/* Link with store */
const store = createStore(myReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
