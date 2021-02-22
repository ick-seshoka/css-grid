import React from "react";

import { Main, Container, Sidebar, Footer, Heading, Title } from "./styles";

import Header from "../../components/header";
import Hero from "../../components/hero";
import Features from "../../components/features";
import Info from "../../components/info";

const Home = () => (
  <Main>
    <Sidebar>
      <Heading>The side.</Heading>
    </Sidebar>
    <Container>
      <Header />
      <Hero />
      <Features />
      <Info />
    </Container>
    <Footer>
      <Title>The foot note.</Title>
    </Footer>
  </Main>
);

export default Home;
