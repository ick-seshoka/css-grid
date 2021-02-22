import React from "react";

import { Container } from "./styles";
import Logo from "./logo";
import Navigation from "./navigation";

const Header = (props) => (
  <Container>
    <Logo />
    <Navigation />
  </Container>
);

export default Header;
