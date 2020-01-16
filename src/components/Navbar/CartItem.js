import React from "react";
import styled from "styled-components";
import iphoneImg from "./image/iphone11-pro.png";
import ximg from "./image/x.jpg";

//redux
import { connect } from "react-redux";
import { removeItem } from "../../redux/actions";
const CartItem = ({ data, removeItem }) => {
  /* const { name, price } = this.props.data; */
  const { id, product_name, price } = data;

  return (
    <Item>
      <CartItemImg>
        <ItemImg src={iphoneImg} />
      </CartItemImg>
      <ItemInfo>
        <ItemName>{product_name}</ItemName>
        <Price>${price} USD</Price>
      </ItemInfo>
      <DelBox>
        <Del
          src={ximg}
          onClick={() => {
            removeItem(id);
          }}
        ></Del>
      </DelBox>
    </Item>
  );
};

export default connect(null, { removeItem })(CartItem);

const Item = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  position: relative;
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
const DelBox = styled.a`
  align-self: center;
  margin: 0 5px;
`;
const Del = styled.img`
  position: absolute;
  top: 55%;
  right: 5%;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
