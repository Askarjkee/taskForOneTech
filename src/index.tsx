import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import "@fontsource/rubik";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Rubik";
}
`

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>
  , document.getElementById('root')
);
