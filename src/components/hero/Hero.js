import React from "react";

import { Container, HeroContent, Heading, Paragraph, Image } from "./styles";

const Hero = (props) => (
  <Container>
    <HeroContent>
      <Heading>Some imporatnt heading</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc risus
        quam, eleifend a odio at, euismod condimentum sem. Nam ac ipsum
        ultricies, feugiat diam non, luctus quam. Aliquam nec hendrerit augue
        euismod condimentum sem. Nam ac ipsum ultricies, feugiat diam non
        Aliquam nec hendrerit augue euismod condimentum sem
      </Paragraph>
    </HeroContent>
    <Image />
  </Container>
);

export default Hero;
