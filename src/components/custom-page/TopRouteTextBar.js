import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopRouteTextBar = () => {
  return (
    <Wrapper>
      <Paragraph>
        <Link to="/">
          <SpanLink>CASETiFY /</SpanLink>
        </Link>
        <SpanLink> 아이폰 케이스 /</SpanLink>
        <SpanLink> iPhone 11 Pro Max Cases /</SpanLink>
        <SpanLink> Custom iPhone Case</SpanLink>
      </Paragraph>
    </Wrapper>
  );
};

export default TopRouteTextBar;

// Styled Components

const Wrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
`;

const Paragraph = styled.p`
  color: #aaaaaa;
`;

const SpanLink = styled.span`
  text-decoration: none;
`;
