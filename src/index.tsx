import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import './index.css';

const auth0Options = {
  domain: "https://ceabrb2cdev.b2clogin.com/ceabrb2cdev.onmicrosoft.com/B2C_1_poc-politica-b2c/oauth2/v2.0",
  clientId: "4e663add-751d-4e5c-b1cd-aa62f4455cb7",
  clientSecret: "2d389157-e7de-37c3-8a2b-d21523950662",
  redirectUri: window.location.origin,
  response_type: "code",
  code_verifier: "ZlSHQ5a_8gdQ2PObesHovAnId1R8yFfYR2ywf3M-zL0",
  code_challenge_method: "S256",
  useRefreshTokens: true,
  tokenDomain: "https://api-dev.cea.com.br/oauth/v2/token"
}

ReactDOM.render(
    <React.StrictMode>
      <Auth0Provider {...auth0Options}>
        <App />
      </Auth0Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
