import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  width: calc(100% - 127px);
  margin: 0 15px;
`

export const AppContainer = styled.section`
  text-align: center;
`

export const AppLogo = styled.img`
  height: 100px;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
`

export const DivContainer = styled.div`
  width: 400px;
`

export const CodeContainer = styled.code`
  word-wrap: break-word;
  font-size: 12px
`