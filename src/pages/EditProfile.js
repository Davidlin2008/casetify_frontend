import React from "react";
import styled from "styled-components";

const EditProfile = () => {
  return (
    <RightWrapper>
      <InnerWrapper>
        <form>
          <MyProfileBox>
            <MyProfileHeaderText>내 프로필</MyProfileHeaderText>
            <ContentDiv>
              <FieldNameSpan>이름 *</FieldNameSpan>
              <InputField name="first_name" />
            </ContentDiv>
            <ContentDiv>
              <FieldNameSpan>메일 *</FieldNameSpan>
              <InputField name="last_name" />
            </ContentDiv>
            <ContentDiv>
              <BioFieldSpan>소개</BioFieldSpan>
              <BioTextArea name="last_name" />
            </ContentDiv>
            <ContentDiv>
              <FieldNameSpan>웹사이트</FieldNameSpan>
              <InputField name="last_name" />
            </ContentDiv>
            <ContentDiv>
              <FieldNameSpan>위치</FieldNameSpan>
              <InputField name="last_name" />
            </ContentDiv>
            <ContentDiv>
              <FieldNameSpan>트위터</FieldNameSpan>
              <InputField name="last_name" />
            </ContentDiv>
          </MyProfileBox>
          <SubmitButton>Update</SubmitButton>
        </form>
      </InnerWrapper>
    </RightWrapper>
  );
};

export default EditProfile;

// Styled Components

const RightWrapper = styled.div`
  width: 100%;
  padding-left: 4vw;
`;

const MyProfileHeaderText = styled.h3`
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
  width: 70%;
  position: relative;
`;

const MyProfileBox = styled.div`
  margin-bottom: 50px;
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FieldNameSpan = styled.span`
  width: 20%;
  color: #666;
`;

const BioFieldSpan = styled.span`
  width: 20%;
  color: #666;
`;

const InputField = styled.input`
  height: 44px;
  width: 80%;
  padding: 0 11px;
  vertical-align: top;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const BioTextArea = styled.textarea`
  height: 100px;
  width: 80%;
  padding: 11px;
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
