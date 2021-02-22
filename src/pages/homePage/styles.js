import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 15% auto;
  grid-template-rows: auto 12% auto;
  grid-template-areas:
    "Sidebar Main"
    "Footer Footer";

  @media screen and (max-width: 60em) {
    grid-template-columns: auto;
    grid-template-areas:
      "Main"
      "Footer";
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 15% 35% 30% 20%;
  grid-template-areas:
    "Header"
    "Hero"
    "Features"
    "Info";
  grid-area: Main;

  @media screen and (max-width: 60em) {
    grid-template-areas:
      "Header"
      "Hero"
      "Info"
      "Features";
  }
`;

export const Sidebar = styled.div`
  display: flex;
  background-color: #596c73;
  grid-area: Sidebar;
  padding: 1em;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 60em) {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  background-color: #ddc3c1;
  grid-area: Footer;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h3`
  font-family: "Lato", sans-serif;
  font-size: 1.3em;
  color: rgba(255, 255, 255, 0.55);
`;

export const Title = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.3em;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 700;
`;
