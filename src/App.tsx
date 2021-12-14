import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { useAuth0 } from '@auth0/auth0-react';
import { AppContainer, AppLogo, AppHeader, Button, DivContainer, CodeContainer } from './styles';

function App() {
  const {
    isLoading,
    error,
    loginWithRedirect,
    // logout,
  } = useAuth0();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [appState, setAppState] = useState<any>({});

  async function getUser() {
    const headers = {
      "Accept": "application/json",
      "Authorization": `${appState.token_type} ${appState.access_token}`,
      "Content-Type": "application/json;charset=UTF-8",
      "mode": "no-cors",
    };

    await fetch(`${process.env.REACT_APP_API_DOMAIN}/mktp/v1/usuarios/perfil`, {
      headers,
      method: "GET"
    })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  }

  function toLocationOrigin() {
    window.location.assign(window.location.origin);
  }

  function onLogout() {
    setAppState({});
    setIsAuthenticated(false);
    localStorage.removeItem("appState");
    // logout({ returnTo: window.location.origin });
    toLocationOrigin()
  }

  useEffect(() => {
    const appStt = localStorage.getItem("appState");

    if (appStt) {
      setAppState(JSON.parse(appStt))
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false); 
    }

  }, [isLoading]);

  useEffect(() => {
    if (appState.access_token) {
      getUser();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.access_token]);

  return (
    <AppContainer>
      <AppHeader>
        <DivContainer>
          <AppLogo src={logo} alt="logo" />
          {isAuthenticated ? (
            <>
              <Button onClick={onLogout}>
                Logout
              </Button>
              <p>
                <CodeContainer>
                  access_token: {`${appState.access_token}`}
                </CodeContainer>
              </p>
            </>
          ) : (
            <>
              {!isLoading && (
                <>
                  <p>Faça login para ver seu token: </p>
                  <Button onClick={loginWithRedirect}>Login</Button>
                </>
              )}
              <p>
                <small>
                  {isLoading && "Carregando..."}
                  {error && `Oops... ${error.message}`}
                </small>
              </p>
            </>
          )}
        </DivContainer>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
