import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Profile from 'pages/Profile';
import EditShipping from 'pages/EditShipping';
import EditProfile from 'pages/EditProfile';
import { URL } from 'config';

const MyPage = ({ match }) => {
  const { option } = match.params;

  const checkPage = option => {
    switch (option) {
      case 'mypage':
        return <Profile />;
      case 'edit':
        return <EditProfile />;
      case 'shipping':
        return <EditShipping />;
      default:
        return <Profile />;
    }
  };

  // 페이지 로드 하자마자 access_token 사용해서 유저정보 GET
  useEffect(() => {
    const access_token = sessionStorage.getItem('access_token') || '';
    const config = {
      headers: {
        Authorization: access_token,
        'Content-Type': 'application/json',
      },
    };

    axios.get(URL, config);
  }, []);

  return (
    <>
      <MainHeader>
        <HeaderInnerWrapper>
          <HeaderText>Hello.</HeaderText>
          <HeaderText>손승현.</HeaderText>
          <ButtonLogOut>Log Out</ButtonLogOut>
        </HeaderInnerWrapper>
      </MainHeader>
      <BottomWrapper>
        <LeftWrapper>
          <ul>
            <HeaderTextLi>MY ACCOUNT</HeaderTextLi>
            <NavLi>프로필</NavLi>
            <NavLi>Give $10. Get $10</NavLi>
            <NavLi>주문 현황</NavLi>
            <NavLi>Notifications</NavLi>
          </ul>
          <ul>
            <HeaderTextLi>고객센터</HeaderTextLi>
            <NavLi>개요</NavLi>
            <NavLi>자주 묻는 질문</NavLi>
            <NavLi>배송</NavLi>
            <NavLi>반품 및 교환</NavLi>
            <NavLi>직접 문의하기</NavLi>
            <NavLi>이용약관</NavLi>
            <NavLi>개인정보 처리방침</NavLi>
            <NavLi>제휴</NavLi>
          </ul>
        </LeftWrapper>
        {checkPage(option)}
      </BottomWrapper>
    </>
  );
};

export default MyPage;

// Styled Components
const MainHeader = styled.header`
  border-bottom: 1px solid #eaeaea;
  padding-left: 4vw;
  padding-right: 4vw;
`;

const HeaderInnerWrapper = styled.div`
  position: relative;
`;

const HeaderText = styled.h2`
  display: inline-block;
  font-size: 6vh;
  font-weight: 400;
  font-family: 'pangram black';
  letter-spacing: 0.02vh;
  height: unset;
  line-height: 6vh;
  margin-top: 8vh;
  margin-bottom: 8vh;
  margin-right: 15px;
  cursor: default;
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 4vw;
  padding-right: 4vw;
`;

const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eaeaea;
  padding-top: 2vh;
`;

const HeaderTextLi = styled.li`
  margin-top: 21px;
  margin-bottom: 21px;
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 14px;
  font-family: 'buenos-semi-bold';
  font-weight: 600;
  color: #b7b7b7;
  cursor: default;
`;

const NavLi = styled.li`
  font-size: 17px;
  line-height: 17px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 21px;
  color: #000;
  font-weight: 600;
  letter-spacing: 0.02vh;
  text-transform: capitalize;
  font-family: 'buenos-semi-bold';
  transition: color 0.2s ease;

  :hover {
    color: lightgray;
    cursor: pointer;
  }
`;

const ButtonLogOut = styled.button`
  font-size: 1.8vh;
  letter-spacing: 0.02vh;
  line-height: 1.8vh;
  position: absolute;
  right: 0;
  bottom: 8vh;
  margin: auto auto;
  top: unset;
  font-weight: 600;
  font-family: 'buenos-bold';
  color: #898989;
  border: none;
  text-decoration: underline;
  transition: color 0.2s ease;

  :hover {
    color: lightgray;
  }
`;
