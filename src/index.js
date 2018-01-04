import React from 'react';
import { render } from 'react-dom';
import Routes from './pages/routes';
import {
  BrowserRouter,
} from 'react-router-dom'


const rootElement = document.querySelector('#root');
if (rootElement) {
  render( <BrowserRouter>
    <Routes />
  </BrowserRouter>, rootElement);
}
