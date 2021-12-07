import React from 'react';
import logo from './logo.svg';
import { useAuth0 } from '@auth0/auth0-react';
import { AppContainer, AppLogo, AppHeader, Button, DivContainer } from './styles';


function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <AppContainer>
      <AppHeader>
        <DivContainer>
          <AppLogo src={logo} alt="logo" />
          {isAuthenticated ? (
            <div>
              <p>Olá, {user?.name}.</p>
              <Button onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <p>Faça login para ver seu nome: </p>
              <Button onClick={loginWithRedirect}>Login</Button>
              <p>
                <small>
                  {isLoading && "Carregando..."}
                  {error && `Oops... ${error.message}`}
                </small>
              </p>
            </div>
          )}
        </DivContainer>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
