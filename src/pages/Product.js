import React, { useState } from "react";
import styled from "styled-components";
import TopRouteTextBar from "../components/TopRouteTextBar";
import ImagePreview from "../components/ImagePreview";
import NameHeader from "../components/NameHeader";
import ProductPrice from "../components/ProductPrice";
import Ratings from "../components/Ratings";
import ColorIcon from "../components/ColorIcon";
import { COLORS } from "../components/data/ColorData";

const Product = () => {
  const [isActive, setIsActive] = useState("1");

  const onClick = id => {
    setIsActive(id);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <TopRouteTextBar />
        <InnerWrapper>
          <InnerLeft>
            <ImagePreview />
          </InnerLeft>
          <InnerRight>
            <NameHeader text="Monogram Studio - Monogram" />
            <ProductPrice />
            <Ratings />
            <PhoneType>기종: </PhoneType>
            <Select>
              <option>아이폰 11 프로맥스</option>
              <option>아이폰 11 프로</option>
            </Select>
            <ColorsText>
              색상: {COLORS[parseInt(isActive) - 1].color_name}
            </ColorsText>
            <ColorIconsContainer>
              {COLORS.map(color => (
                <ColorIcon
                  id={color.id}
                  name={color.color_name}
                  color={color.color_code}
                  onClick={onClick}
                  active={isActive === color.id}
                />
              ))}
            </ColorIconsContainer>
          </InnerRight>
        </InnerWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Product;

// Styled Component

const PageWrapper = styled.div`
  width: 100%;
  /* height: 1024px; */
`;

const ContentWrapper = styled.div`
  max-width: 1150px;
  margin: auto;

  @media (max-width: 1450px) {
    max-width: 1000px;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const InnerLeft = styled.div`
  width: 100%;
`;

const InnerRight = styled.div`
  width: 700px;
  padding-left: 20px;
  padding-right: 20px;
`;

const PhoneType = styled.p`
  color: #aaaaaa;
  margin-top: 20px;
`;

const ColorsText = styled.p`
  color: #aaaaaa;
  margin-top: 20px;
`;

const Select = styled.select`
  margin-top: 10px;
  width: 100%;
  height: 44px;
  padding: 10px 15px;
  padding-right: 50px;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  background-color: transparent;
  color: #666;
  font-weight: 500;
  appearance: none;

  &:focus {
    border: 1px solid #e5e5e5;
    border-radius: 2px;
  }
`;

const ColorIconsContainer = styled.ul`
  display: block;
  margin-top: 10px;
`;
