import logo from './logo.svg';
import './App.css';
import styled, { keyframes } from 'styled-components';

const moveRightAndLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px); /* Adjust the distance for your desired effect */
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledButton = styled.button`
  background-color: red;
  color: black;
  font-size: 50px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  animation: ${moveRightAndLeft} 2s linear infinite;
  
`;


const StyledDiv = styled.div`
  background-color: green;
  color: black;
  font-size: 50px;
  padding: 10px 20px;
  border: 1px solid white;
  cursor: pointer;
  height: 100%;

`;




function App() {
  return (
    <StyledDiv className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StyledButton>Don't Press </StyledButton>
      </header>
    </StyledDiv>
  );
}

export default App;
