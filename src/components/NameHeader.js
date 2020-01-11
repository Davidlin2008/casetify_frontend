import React from "react";
import styled from "styled-components";

const NameHeader = ({ text }) => {
  return <HeaderText>{text}</HeaderText>;
};

export default NameHeader;

// Stlyed Component

const HeaderText = styled.h1`
  width: 100%;
  font-family: "pangram";
  font-size: 22px;
`;
