import React, { Component } from "react";
import styled from "styled-components";
import ColorItem from "./ColorItem";
class ProductItem extends Component {
  state = {
    image: this.props.data.image[0].src,
    select: false
  };
  choiceColor = target => {
    const { image } = this.props.data;
    console.log(target);
    const pickImage = image.filter(element => element.id === target);

    console.log(pickImage[0].id);
    this.setState({
      image: pickImage[0].src
    });
  };
  render() {
    const { model, name, price, image } = this.props.data;
    return (
      <Li>
        <ItemContainer>
          <ImageBox>
            <ProductImg src={this.state.image} />
          </ImageBox>
          <ContentBox>
            <Model>{model}</Model>
            <ProductName>{name}</ProductName>
            <Price>{price}</Price>
            <Ul>
              {image.map(element => (
                <ColorItem
                  key={element.id}
                  data={element}
                  choiceColor={this.choiceColor}
                />
              ))}
            </Ul>
          </ContentBox>
          <A></A>
        </ItemContainer>
      </Li>
    );
  }
}
export default ProductItem;
const Li = styled.li`
  position: relative;
  margin-bottom: 48px;
  margin-top: 24px;
  padding: 0 10px;
  width: 25%;
`;
const ItemContainer = styled.div`
  position: relative;
`;
const ImageBox = styled.div``;
const ProductImg = styled.img`
  width: 100%;
  cursor: pointer;
`;
const ContentBox = styled.div`
  color: #333;
  width: 100%;
  position: relative;
  top: 2em;
  text-align: center;
`;
const Model = styled.h2`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 24px;
  color: #343434;
`;
const ProductName = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Price = styled.p`
  font-weight: 600;
  margin-top: 15px;
  line-height: 24px;
`;
const Ul = styled.ul`
  height: 52px;
  list-style: none;
  width: 88px;
  margin: 0 auto;
`;
const A = styled.a`
  width: 100%;
  height: 85%;
  position: absolute;
  top: 0;
  left: 0;
  text-decoration: none;
  color: #333;
`;
