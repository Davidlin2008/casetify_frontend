import React, { Component } from "react";
import styled from "styled-components";
import ColorItem from "./ColorItem";
class ProductItem extends Component {
  state = {
    image: this.props.data.image[0].src
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
`;
const ProductName = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
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
