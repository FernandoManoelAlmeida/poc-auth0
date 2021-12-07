import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { AppContainer, AppLogo, AppHeader, Button } from './styles';

const AUTORIZE_URL = "https://ceabrb2cdev.b2clogin.com/ceabrb2cdev.onmicrosoft.com/B2C_1_poc-politica-b2c/oauth2/v2.0/authorize";
const DEV_URL = "https://api-dev.cea.com.br";

function App() {

  async function getUser() {
    const headers = {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json;charset=UTF-8",
      "mode": "no-cors",
    };

    await fetch(`${DEV_URL}/mktp/v1/usuarios/perfil`, {
      headers,
      method: "GET"
    })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  }

  async function postToken() {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "*/*"
    };

    await fetch(`${DEV_URL}/oauth/v2/token`, {
      headers,
      body: JSON.stringify({
        grant_type: "authorization_code",
        code: token,
        redirect_uri: window.location.origin,
        code_verifier: "1qaz2wsx3edc4rfv5tgb6yhn1234567890qwertyuiop",
        client_id: "4e663add-751d-4e5c-b1cd-aa62f4455cb7",
        client_secret: "2d389157-e7de-37c3-8a2b-d21523950662"
       }),
        method: "POST"
      })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  }

  function onLogout() {
    setToken(undefined);
  }

  const [token, setToken] = useState<string>();

  async function login() {
    const data: any = {
      client_id: "4e663add-751d-4e5c-b1cd-aa62f4455cb7",
      code_challenge_method: "S256302",
      redirect_uri: window.location.origin,
      code_verifier: "ZlSHQ5a_8gdQ2PObesHovAnId1R8yFfYR2ywf3M-zL0",
      response_type: "code",
      scope: "openid",
      state: "22222"
    };

    const queryParams = Object.keys(data).map((k) => {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');

    window.location.assign(`${AUTORIZE_URL}?${queryParams}`);
  }

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);

    setToken(params.get("code") ?? "");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (token) {
      postToken();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <div>
          <p>Faça login para ver seu nome: </p>
          <Button onClick={login}>Login</Button>
        </div>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
