import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import TopRouteTextBar from "components/custom-page/TopRouteTextBar";
import ImagePreview from "components/custom-page/ImagePreview";
import NameHeader from "components/custom-page/NameHeader";
import ProductPrice from "components/custom-page/ProductPrice";
import Ratings from "components/custom-page/Ratings";
import Colors from "components/custom-page/Colors";
import Design from "components/custom-page/Design";
import Reviews from "components/custom-page/Reviews";
import { URL } from "config";

// Redux related imports
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";
import { sumPrice } from "../redux/actions";

const Product = ({
  selectedColor,
  selectedDesign,
  addedText,
  addToCart,
  sumPrice,
  history
}) => {
  const [item, setItem] = useState({
    product_name: "Monogram Studio - Monogram",
    model: "아이폰 11 프로맥스",
    color: "asdf",
    design: "Monogram",
    text: "ABC",
    text_color: "Red",
    price: "55"
  });

  const [btnText, setBtnText] = useState("장바구니에 담기");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setItem({
      ...item,
      color: selectedColor,
      design: selectedDesign,
      text: addedText
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor, selectedDesign, addedText]);

  const onClick = item => {
    addToCart(item);
    sumPrice(item.price);
    setBtnText("ADDING...");
    setIsClicked(true);
    setTimeout(() => {
      history.push("/cart");
    }, 3000);

    let token = sessionStorage.getItem("access_token") || "";

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ item })
    });
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
            <Colors />
            <Design />
            <AtcBtn isClicked={isClicked} onClick={() => onClick(item)}>
              <AtcBtnFiller isClicked={isClicked} />
              <BtnTextWrapper>{btnText}</BtnTextWrapper>
            </AtcBtn>
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

export default connect(mapStateToProps, { addToCart, sumPrice })(
  withRouter(Product)
);

// Styled Component

const AtcBtn = styled.div`
  cursor: pointer;
  overflow: hidden;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  color: #fff;
  /* background-color: #333; */
  background-color: ${props => (props.isClicked ? "#1a1a1a" : "#333")};
  background-size: 200% 50px;
  border-color: #262626;
  border-radius: 2px;
  font-size: 16px;
  font-family: inherit;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  :hover {
    background-color: #1a1a1a;
  }
`;

const AtcBtnFiller = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  left: -100%;
  background-color: #373737;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.isClicked &&
    css`
      animation: FillIn 3s ease-out forwards;
    `}

  @keyframes FillIn {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }
`;

const BtnTextWrapper = styled.span`
  color: #fff;
  position: absolute;
  /* z-index: 1000; */
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
  position: relative;
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
