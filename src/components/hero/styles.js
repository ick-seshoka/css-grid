import styled from "styled-components";

import MountainBg from "../../assets/images/mountain-bg.jpg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding-left: 5.5em;
  padding-right: 5.5em;
  background-color: #e0e0e0;
  grid-area: Hero;
  align-items: center;

  @media screen and (max-width: 40em) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  font-family: "Robotot", sans-serif;
  font-size: 1.5em;
  color: #d99c9c;
`;

export const Paragraph = styled.p`
  font-family: "Robotot", sans-serif;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.55);
  line-height: 1.5em;
`;

export const Image = styled.img.attrs({
  src: MountainBg,
})`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;
