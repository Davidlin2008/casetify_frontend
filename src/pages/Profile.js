import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import edit_icon from "img/profile_page/edit.svg";

const Profile = () => {
  return (
    <RightWrapper>
      <RightInnerWrapper>
        <MyInfoBoxLeft>
          <MyInfoHeaderText>내 프로필</MyInfoHeaderText>
          <MyInfoUser>
            <UserAvatar src="https://www.casetify.com/controllers/Mapper.php?img=&profilePicture=yes&squaring=yes" />
            <Username>손승현</Username>
          </MyInfoUser>
          <EmailWrapper>
            <EmailText>이메일:</EmailText>
            <EmailText>jamessoun93@gmail.com</EmailText>
          </EmailWrapper>
          <Footer>
            <Link to="/mypage/edit">
              <BtnBottom>
                <EditIcon src={edit_icon} />
                수정
              </BtnBottom>
            </Link>
            <BtnBottom>
              <EditIcon src={edit_icon} />
              비밀번호 변경
            </BtnBottom>
          </Footer>
        </MyInfoBoxLeft>
        <MyInfoBoxRight>
          <MyInfoHeaderText>배송 주소</MyInfoHeaderText>
          <Footer>
            <Link to="/mypage/shipping">
              <BtnBottom>
                <EditIcon src={edit_icon} />
                수정
              </BtnBottom>
            </Link>
          </Footer>
        </MyInfoBoxRight>
      </RightInnerWrapper>
    </RightWrapper>
  );
};

export default Profile;

// Styled Components

const RightWrapper = styled.div`
  width: 100%;
  padding-left: 4vw;
`;

const RightInnerWrapper = styled.div`
  margin-top: 4vh;
  display: flex;
`;

const MyInfoBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const MyInfoBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const MyInfoHeaderText = styled.h3`
  margin: unset;
  font-size: 3.6vh;
  letter-spacing: 0.02vh;
  line-height: 3.6vh;
  font-weight: 500;
  font-family: "buenos-semi-bold";
  text-transform: capitalize;
  cursor: default;
`;

const MyInfoUser = styled.div`
  display: flex;
  margin-top: 20px;
`;

const UserAvatar = styled.img`
  width: 44px;
  height: auto;
  border-radius: 50%;
  margin-right: 15px;
`;

const Username = styled.div`
  display: flex;
  align-items: center;
  color: #666666;
`;

const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: #666666;
`;

const EmailText = styled.span`
  color: #666666;
  letter-spacing: 1px;
  font-weight: 300;
`;

const Footer = styled.footer`
  margin-top: 20px;
  display: flex;
`;

const BtnBottom = styled.span`
  color: #333;
  margin-right: 22px;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  :hover {
    color: lightgray;
    cursor: pointer;
  }
`;

const EditIcon = styled.img`
  width: 17px;
  margin-right: 4px;
`;
