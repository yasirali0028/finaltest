import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './css/theme.css';
import { Web3ReactProvider } from '@web3-react/core'
import App from './App';
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
} 

ReactDOM.render(
  <>
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Web3ReactProvider>
  </>,
  document.getElementById('root')
);

