import React from "react";
import styled from "styled-components";

const ProductPrice = () => {
  return (
    <PriceInfo>
      <Price>$55 USD</Price>
      <FreeShipping> - 무료 배송</FreeShipping>
    </PriceInfo>
  );
};

export default ProductPrice;

// Styled Components

const PriceInfo = styled.h3`
  width: 100%;
`;

const Price = styled.span`
  font-size: 14px;
  font-family: "pangram";
`;

const FreeShipping = styled.span`
  font-size: 14px;
  font-family: "pangram";
  color: #aaaaaa;
`;
