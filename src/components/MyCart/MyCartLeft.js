import React from "react";
import styled from "styled-components";

const MyCartLeft = () => {
  return (
    <CartContainer>
      <div>
        <CartTitle>선택하신 상품이 없습니다!</CartTitle>
        <CartSubTitle>
          아티스트 컬렉션을 둘러보거나 케이스를 직접 커스텀해보세요.
        </CartSubTitle>
        <Div>
          <ATag> 컬렉션 </ATag>
          <br />
          <ATag> 케이스 만들기 </ATag>
        </Div>
      </div>
    </CartContainer>
  );
};

export default MyCartLeft;

//style

// const ProductBox = styled.div`
//   display: flex;

// `;

// const Img = styled.img`
//   width: 50%;
// `;

const CartContainer = styled.section`
  display: flex;
  padding-bottom: 44px;
  padding-top: 44px;
  border-bottom: 1px solid #f2f2f2;
  /* margin-right: 50px; */
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const CartTitle = styled.h3`
  color: #aaa;
  font-weight: 500;
  line-height: 1.3em;
  letter-spacing: 0.03em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
`;

const CartSubTitle = styled.p`
  margin-bottom: 48px;
  color: #aaa;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

const ATag = styled.a`
  margin-right: 20px;
  margin-bottom: 0px;
  color: #666;
  background-color: #fff;
  border-color: #666;
  padding: 21px 33px;
  font-size: 18px;
  line-height: 18px;
  border-radius: 2px;
  height: inherit;
  min-width: inherit;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid #666;
  white-space: nowrap;
  :hover {
    color: #aaaaaa;
    border-color: #aaaaaa;
    transition: background 0.2s ease-out;
  }
`;
