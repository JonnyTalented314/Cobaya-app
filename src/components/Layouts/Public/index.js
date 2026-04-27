import React from "react";
import styled from "styled-components";

import PublicBg from '../../../assets/images/backgrounds/public-background.svg'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${PublicBg});
  background-repeat: no-repeat;
`;

const PublicLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PublicLayout;
