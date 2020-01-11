import React from "react";
import styled from "styled-components";

const AddToCartBtn = () => {
  return <Btn>장바구니에 담기</Btn>;
};

export default AddToCartBtn;

// Styled Components

const Btn = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: #333;
  border-color: #262626;
  border-radius: 2px;
  transition: background 0.2s ease-out;
  font-size: 16px;
  font-family: inherit;
  letter-spacing: 2px;
`;
