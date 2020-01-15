import React from "react";
import styled from "styled-components";

const EditShipping = () => {
  return (
    <RightWrapper>
      <InnerWrapper>
        <form>
          <NameBox>
            <NameHeaderText>이름 (Name)</NameHeaderText>
            <NameDiv>
              <NameSpan>이름 *</NameSpan>
              <NameInput name="first_name" />
            </NameDiv>
            <NameDiv>
              <NameSpan>성 *</NameSpan>
              <NameInput name="last_name" />
            </NameDiv>
          </NameBox>
          <NameBox>
            <NameHeaderText>주소 (Address)</NameHeaderText>
            <NameDiv>
              <NameSpan>주소 *</NameSpan>
              <NameInput name="address" />
            </NameDiv>
            <NameDiv>
              <NameSpan>우편번호 *</NameSpan>
              <NameInput name="zip_code" />
            </NameDiv>
          </NameBox>
          <SubmitButton>Update</SubmitButton>
        </form>
      </InnerWrapper>
    </RightWrapper>
  );
};

export default EditShipping;

// Styled Components

const RightWrapper = styled.div`
  width: 100%;
  padding-left: 4vw;
`;

const NameHeaderText = styled.h3`
  margin-bottom: 30px;
  font-size: 3.6vh;
  letter-spacing: 0.02vh;
  line-height: 3.6vh;
  font-weight: 500;
  font-family: "buenos-semi-bold";
  text-transform: capitalize;
  cursor: default;
`;

const InnerWrapper = styled.div`
  margin-top: 4vh;
  width: 60%;
  position: relative;
`;

const NameBox = styled.div`
  margin-bottom: 50px;
`;

const NameDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const NameSpan = styled.span`
  width: 15%;
  color: #666;
`;

const NameInput = styled.input`
  height: 44px;
  width: 85%;
  padding: 0 11px;
  vertical-align: top;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  height: 60px;
  line-height: 60px;
  padding: 0 33px;
  font-size: 18px;
  color: white;
  background-color: #333;
  position: absolute;
  right: 0;
`;
