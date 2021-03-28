import styled from 'styled-components';

export const Container = styled.div`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style: none;
    margin: 10px 0;
    padding: 5px;
    background-color: lightpink;

    div {
      width: 8em;
      display: flex;
      justify-content: space-around;
      align-items: center;

      button {
        border: none;
        border-radius: 3px;
        padding: 5px;
        background-color: red;

        /* &:first-of-type {
          background-color: yellow;
        } */
      }
    }
  }
`;
