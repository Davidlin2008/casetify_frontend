import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopRouteTextBar from "../components/custom-page/TopRouteTextBar";
import ImagePreview from "../components/custom-page/ImagePreview";
import NameHeader from "../components/custom-page/NameHeader";
import ProductPrice from "../components/custom-page/ProductPrice";
import Ratings from "../components/custom-page/Ratings";
import Colors from "../components/custom-page/Colors";
import Design from "../components/custom-page/Design";
import Reviews from "../components/custom-page/Reviews";

// Redux related imports
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";

const Product = ({ selectedColor, selectedDesign, addedText, addToCart }) => {
  const [item, setItem] = useState({
    product_name: "Monogram Studio - Monogram",
    model: "아이폰 11 프로맥스",
    color: "asdf",
    design: "Monogram",
    text: "ABC",
    text_color: "Red",
    text_shadow: "idk",
    price: "55"
  });

  useEffect(() => {
    setItem({
      ...item,
      color: selectedColor,
      design: selectedDesign,
      text: addedText
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor, selectedDesign]);

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
            <Colors />
            <Design />
            <AtcBtn onClick={() => addToCart(item)}>장바구니에 담기</AtcBtn>
          </InnerRight>
        </InnerWrapper>
      </ContentWrapper>
      <Reviews />
    </PageWrapper>
  );
};

// Store에서 관리하는 state를 이 컴포넌트에 props로 넘겨줌
const mapStateToProps = state => {
  return {
    selectedColor: state.selectedColor,
    selectedDesign: state.selectedDesign,
    addedText: state.addedText
  };
};

export default connect(mapStateToProps, { addToCart })(Product);

// Styled Component

const AtcBtn = styled.button`
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
  justify-content: space-between;
`;

const InnerLeft = styled.div`
  width: 100%;
`;

const InnerRight = styled.div`
  width: 670px;
  padding-left: 20px;
  padding-right: 20px;
`;

const PhoneType = styled.p`
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
