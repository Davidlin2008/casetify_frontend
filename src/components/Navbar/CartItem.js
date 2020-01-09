import React, { Component } from "react";
import styled from "styled-components";
import iphoneImg from "./image/iphone11-pro.png";
export default class CartItem extends Component {
  render() {
    const { name, price } = this.props.data;
    return (
      <Item>
        <CartItemImg>
          <ItemImg src={iphoneImg} />
        </CartItemImg>
        <ItemInfo>
          <ItemName>{name}</ItemName>
          <Price>{price}</Price>
        </ItemInfo>
      </Item>
    );
  }
}

const Item = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
`;
const CartItemImg = styled.a`
  position: relative;
  width: 72px;
  align-self: center;
  margin-left: 5px;
  margin-right: 5px;
  display: inline-block;
  text-decoration: none;
  color: #333;
`;
const ItemImg = styled.img`
  border: 0;
`;
const ItemInfo = styled.a`
  flex-grow: 1;
  overflow: hidden;
  align-self: center;
  text-decoration: none;
  margin-right: 5px;
  margin-left: 5px;
  color: #333;
`;
const ItemName = styled.h4`
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
`;
const Price = styled.p`
  color: #aaa;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;
