import styled from "styled-components";
import MountainSVG from "../../assets/icons/svg/mountain-bg.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  background-color: #f2f2f2;
  padding: 3em;
  justify-items: center;
  grid-area: Info;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
`;

export const Heading = styled.h3`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: #d0d8da;
  font-size: 1.4em;
`;

export const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  color: rgba(0, 0, 0, 0.35);
`;

export const SvgImage = styled.img.attrs({ src: MountainSVG })`
  width: 165px;
  height: 165px;
  opacity: 0.3;
  align-self: center;
`;
