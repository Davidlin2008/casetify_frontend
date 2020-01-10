import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import bg_image from "../img/signup_bg.jpg";
import fb_logo from "../img/facebook.svg";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    phone_number: ""
  });

  const onChange = e => {
    const { name } = e.target;

    const newInfo = {
      ...userInfo,
      [name]: e.target.value
    };

    setUserInfo(newInfo);
  };

  const onSubmit = e => {
    e.preventDefault();

    axios
      .post("http://10.58.7.197:8000/user/signup", userInfo)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <Wrapper>
        <SlidingBackground />
        <Backdrop />
        <BackdropFadeOut />
        <LoginWrapper>
          <LoginBox>
            <InnerWrap>
              <HeaderText>CASETiFY에 가입하세요</HeaderText>
              <ButtonFacebook>
                <img src={fb_logo} alt="sdf" />
                <ButtonInnerSpan>Login with Facebook</ButtonInnerSpan>
              </ButtonFacebook>
              <LineBreakOuter>
                <Line />
                <LineBreakSpan>or</LineBreakSpan>
                <Line />
              </LineBreakOuter>
              <form onSubmit={onSubmit}>
                <InputBox
                  onChange={onChange}
                  value={userInfo.email}
                  name="email"
                  type="text"
                  placeholder="이메일"
                />
                <InputBox
                  onChange={onChange}
                  value={userInfo.password}
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                />
                <InputBox
                  onChange={onChange}
                  value={userInfo.phone_number}
                  name="phone_number"
                  type="text"
                  placeholder="전화번호"
                />
                <ButtonSubmit type="submit">가입하기</ButtonSubmit>
              </form>
              <ButtonLoginWrapper>
                <ButtonLogin>
                  <Link to="/signin">회원이신가요?</Link>
                </ButtonLogin>
              </ButtonLoginWrapper>
            </InnerWrap>
          </LoginBox>
        </LoginWrapper>
      </Wrapper>
    </div>
  );
};

export default SignUp;

// Styled Components

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
`;

const SlidingBackground = styled.div`
  position: absolute;
  z-index: -3;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  background-image: url(${bg_image});
  background-size: cover;
  animation: moveUp 35s linear forwards;
  filter: blur(3px);

  @keyframes moveUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-400px);
    }
  }
`;

const Backdrop = styled.div`
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const BackdropFadeOut = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0;
  animation: fadeOut 0.5s linear forwards;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const LoginWrapper = styled.div`
  max-width: 450px;
  margin: auto;
  margin-top: 180px;
  height: 430px;
`;

const LoginBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px;
`;

const InnerWrap = styled.div`
  max-width: 290px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderText = styled.h1`
  max-width: 290px;
  margin: 0 0 14px;
  font-family: "pangram";
  letter-spacing: 1px;
  font-size: 18px;
  color: #666666;
  text-align: center;
`;

const ButtonInnerSpan = styled.span`
  color: white;
  font-size: 14px;
  margin-left: 11px;
`;

const ButtonFacebook = styled.button`
  width: 100%;
  height: 44px;
  background-color: #215fac;
  color: white;
  font-size: 14px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineBreakOuter = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 11px;
`;

const Line = styled.div`
  width: 116px;
  height: 1px;
  border-top: 1px solid #666;
`;

const LineBreakSpan = styled.span`
  color: #666;
`;

const InputBox = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 11px;
  font-size: 14px;
  background-color: #eeeeee;
  margin-bottom: 10px;
  border-radius: 3px;
`;

const ButtonSubmit = styled.button`
  width: 100%;
  height: 44px;
  background-color: #333;
  color: white;
  font-size: 14px;
  border-radius: 3px;
`;

const ButtonLoginWrapper = styled.div`
  width: 100%;
  padding-top: 11px;
  text-align: center;
`;

const ButtonLogin = styled.a`
  font-size: 14px;
  color: #666666;
`;
