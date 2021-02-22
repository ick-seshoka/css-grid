import styled from "styled-components";
import { FeaturedPlayList } from "@styled-icons/material-twotone";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;

  @media screen and (max-width: 60em) {
    &:nth-child(5) {
      grid-column: 1 / span 2;
    }
  }
`;

export const Icon = styled(FeaturedPlayList).attrs({ size: "4em" })`
  color: rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.55);
  line-height: 1.5em;
  text-align: center;
`;
