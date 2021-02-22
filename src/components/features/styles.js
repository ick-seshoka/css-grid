import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-column-gap: 1em;
  padding: 2em;
  background-color: #d0d8da;
  grid-area: Features;

  @media screen and (max-width: 60em) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
  }
`;
