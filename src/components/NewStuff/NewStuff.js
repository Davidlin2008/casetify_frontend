import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

class NewStuff extends Component {
  render() {
    return (
      <>
        <StuffSection>
          <div>
            <StuffTitle>트렌디한 디자인</StuffTitle>
            <StuffTitleSub>
              새로운 디자인으로 핸드폰을 꾸며보세요.
            </StuffTitleSub>

            {/* <StuffBox> */}
            {/* <div> */}
            <StuffContent>
              <StuffContainer>
                <StuffImg src="https://cdn-image02.casetify.com/usr/10831/8260831/~v1/7977517_iphone11-pro-max_16000254.png.350x350-t.png" />
                <StuffTextBox>
                  <StuffText1>Monogram Studio - Monogram (CP)</StuffText1>
                  <StuffText2>iPhone 11 Pro Max Leather</StuffText2>
                </StuffTextBox>
              </StuffContainer>
              <StuffContainer>
                <StuffImg src="https://cdn-image02.casetify.com/usr/11785/3671785/~v7/7744388_iphone11-pro_16000193.png.350x350-t.png" />
                <StuffTextBox>
                  <StuffText1>Angel Luv</StuffText1>
                  <StuffText2>iPhone 11 Pro Mirror</StuffText2>
                </StuffTextBox>
              </StuffContainer>
              <StuffContainer>
                <StuffImg src="https://cdn-image02.casetify.com/usr/6371/7116371/~v1/7691779_iphone11-pro_16000229.png.350x350-t.png" />
                <StuffTextBox>
                  <StuffText1>Custom iPhone Case (Maddie)</StuffText1>
                  <StuffText2>iPhone 11 Pro Marble</StuffText2>
                </StuffTextBox>
              </StuffContainer>
              <StuffContainer>
                <StuffImg src="https://cdn-image02.casetify.com/usr/5263/2765263/~v75/4438064_iphone11-pro_16000273.png.350x350-t.png" />
                <StuffTextBox>
                  <StuffText1>Solar System</StuffText1>
                  <StuffText2>iPhone 11 Pro Impact</StuffText2>
                </StuffTextBox>
              </StuffContainer>
              <StuffContainer>
                <StuffImg src="https://cdn-image02.casetify.com/usr/14396/4304396/~v14/6590704_iphone11-pro-max_16000092.png.350x350-t.png" />
                <StuffTextBox>
                  <StuffText1>PP-0008</StuffText1>
                  <StuffText2>iPhone 11 Pro Max Impact</StuffText2>
                </StuffTextBox>
              </StuffContainer>
            </StuffContent>
            {/* </div> */}
            {/* </StuffBox> */}
          </div>
        </StuffSection>
      </>
    );
  }
}

export default NewStuff;

//style

const StuffSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f15b47;
  padding-bottom: 40px;
`;

const StuffTitle = styled.h2`
  font-size: 32px;
  color: #ffffff;
  text-align: center;
  margin-top: 75px;
`;

const StuffTitleSub = styled.p`
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 25px;
`;

// const StuffBox = styled.div`
//   display: flex;
// `;

const StuffContent = styled.div`
  display: flex;
  justify-content: center;
`;

const StuffContainer = styled.a`
  display: inline-block;
  width: 17.5%;
  vertical-align: top;
  padding-left: 40px;
  padding-right: 40px;
  cursor: pointer;
`;

const StuffImg = styled.img`
  border: 0;
  opacity: 1;
  max-width: 100%;
  width: 100%;
`;

const StuffTextBox = styled.p`
  display: block;
  text-align: center;
  margin-top: 20px;
`;

const StuffText1 = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: center;
  font-size: 11px;
  color: #ffffff;
`;

const StuffText2 = styled.strong`
  white-space: nowrap;
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 10px;
  color: #ffffff;
`;
