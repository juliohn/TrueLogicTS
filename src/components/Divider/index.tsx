import React from "react";

import { Container, ShadowTopLeft, ShadowBottomRight } from "./styles";

const Divider = () => {
  return (
    <Container>
      <ShadowTopLeft />
      <ShadowBottomRight />
    </Container>
  );
};

export default Divider;
