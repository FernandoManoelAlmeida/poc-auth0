import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import './index.css';

const auth0Options = {
  domain: process.env.REACT_APP_AUTH_DOMAIN || "",
  clientId: process.env.REACT_APP_AUTH_CLIENT_ID || "",
  tokenDomain: process.env.REACT_APP_AUTH_TOKEN_DOMAIN,
  clientSecret: process.env.REACT_APP_AUTH_CODE_VERIFIER,
  code_verifier: process.env.REACT_APP_AUTH_DOMAIN,
  redirectUri: window.location.origin,
  response_type: "code",
  code_challenge_method: "S256",
  useRefreshTokens: true,
  useFormData: true,
  skipDecodedIdToken: true,
  onRedirectCallback: (appState: any) => {
    localStorage.setItem("appState", JSON.stringify(appState));
  }
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
