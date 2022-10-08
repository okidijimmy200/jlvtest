import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.scss'

const rootNode = document.getElementById('root');
if(rootNode){
  createRoot(rootNode)
    .render(
        <React.StrictMode>
        <HashRouter>
        <App />
        </HashRouter>
       
      </React.StrictMode>
    );
}