import React from "react";

import { NavMenu, NavList, NavListItem, NavListLink } from "./styles";

const Navigation = () => (
  <NavMenu>
    <NavList>
      <NavListItem>
        <NavListLink href="#" alt="home">
          Home
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink href="#" alt="our services">
          Service
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink href="#" alt="about us">
          About
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink href="#" alt="contact us">
          Contact
        </NavListLink>
      </NavListItem>
    </NavList>
  </NavMenu>
);

export default Navigation;
