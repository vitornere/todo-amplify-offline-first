import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    font-size: 20px;
    font-weight: 600;
  }

  input {
    padding: 5px;
    margin: 0 0 0.5em;
    border: none;
    background-color: lightblue;
    border-radius: 10px;
  }

  button {
    width: 100%;
    padding: 10px 0;
    border-radius: 5px;
    border: none;
    background-color: lightgreen;
  }
`;
