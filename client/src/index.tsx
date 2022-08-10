import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store,persistor} from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import './i18next/i18next';
import i18next from 'i18next';

i18next.changeLanguage(localStorage.getItem('Language') || 'en')
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>
);
