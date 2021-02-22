import React from "react";

import { Container, InfoContent, Heading, Paragraph, SvgImage } from "./styles";

const Info = () => (
  <Container>
    <InfoContent>
      <Heading>Reinvention of the mountain</Heading>
      <Paragraph>
        Proin tristique orci eu urna volutpat rutrum. In dapibus auctor lacus.
        Maecenas nisl est, eleifend vel ipsum ut, rhoncus varius purus. Sed
        blandit porta tincidunt. Maecenas nec orci lectus.
      </Paragraph>
    </InfoContent>
    <SvgImage />
  </Container>
);

export default Info;
