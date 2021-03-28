import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 1em 0;
  }

  #list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;

    ul {
      width: 100%;
    }
  }
`;
