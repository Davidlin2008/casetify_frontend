import React, { useState } from "react";
import styled from "styled-components";
import MyCartData from "./MyCartData";
import { Link } from "react-router-dom";
// import styled from "styled-components";

const MyCartRight = props => {
  return (
    <Div>
      <form>
        <Aside>
          <header>
            <CartTitle> 주문내역 확인 </CartTitle>
          </header>
          <div>
            <ul>
              <Li1>
                <Medium>소계:</Medium>
                <Medium>{props.price} USD</Medium>
              </Li1>
              <Li2>
                <Medium>배송:</Medium>
                <Medium>0 USD</Medium>
              </Li2>
              <ul>
                <Li>
                  <Full>합계</Full>
                  <Full>${props.price} USD</Full>
                </Li>
              </ul>
            </ul>
            <div>
              <Code type="text" placeholder="할인코드를 입력해주세요" />
              <SubmitBtn type="submit" palceholder="다음" value="다음" />
            </div>
          </div>
        </Aside>
        <Link to="/payment">
          <BtnBox>
            <Checkoutbtn type="submit" value="체크아웃"></Checkoutbtn>
          </BtnBox>
        </Link>
      </form>
    </Div>
  );
};

export default MyCartRight;

//style

const Div = styled.div`
  width: 320px;
  position: relative;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Aside = styled.aside`
  background-color: #f2f2f2;
  padding: 0 15px;
  padding-bottom: 20px;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Li1 = styled.li`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #e5e5e5;
`;

const Li2 = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
`;

const CartTitle = styled.h1`
  padding-bottom: 24px;
  padding-top: 24px;
  font-weight: 500;
  line-height: 1.3em;
  letter-spacing: 0.03em;
  font-size: 16px;
  color: #343434;
`;

const Medium = styled.span`
  margin-bottom: 12px;
  margin-top: 12px;
  display: list-item;
  font-size: 14px;
  line-height: 22px;
  color: #666;
`;

const Full = styled.span`
  padding-bottom: 24px;
  padding-top: 24px;
  font-size: 16px;
  line-height: 22px;
  color: #343434;
  font-weight: 500;
  line-height: 1.3em;
  letter-spacing: 0.03em;
`;

const BtnBox = styled.div`
  margin-bottom: 12px;
  margin-top: 24px;
`;
const Checkoutbtn = styled.input`
  width: 100%;
  cursor: pointer;
  color: #fff;
  background-color: #333;
  border-color: #262626;
  border-width: 1px;
  padding: 17px 15.4px;
  font-size: 14px;
  line-height: 14px;
  border-radius: 2px;
  font-weight: 500;
  letter-spacing: 2px;
  :hover {
    background-color: black;
    transition: background 0.2s ease-out;
  }
`;

const Code = styled.input`
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  width: 200px;
  height: 43px;
  padding: 0 11px;
  -webkit-appearance: none;
  vertical-align: top;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  color: #666;
  font-size: 14px;
`;

const SubmitBtn = styled.input`
  color: #fff;
  background-color: #333;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 44px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  :hover {
    background-color: #666666;
    transition: background 0.2s ease-out;
  }
`;
