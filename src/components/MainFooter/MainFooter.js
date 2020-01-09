import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import korea_logo from "../../img/korea.svg";
import instagram_brands from "../../img/instagram-brands.svg";
import facebook_brands from "../../img/facebook-brands.svg";
import twitter_brands from "../../img/twitter-brands.svg";
import pinterest_brands from "../../img/pinterest-brands.svg";
import snapchat_brands from "../../img/snapchat-ghost-brands.svg";

class MainFooter extends Component {
  render() {
    return (
      <>
        <FooterSection>
          <FooterTop>
            <FooterNewsletter>
              <SubTitle>소식지</SubTitle>
              <form id="newsletter-form" method="post">
                <div>
                  <EmailInput
                    type="email"
                    placeholder="이메일 주소를 입력하세요."
                  />
                  <JoinInput
                    type="submit"
                    palceholder="가입하기"
                    value="가입하기"
                  />
                </div>
              </form>
              <NewsletterSubTitle>
                Casetify를 팔로잉 해주세요!
              </NewsletterSubTitle>
              <div>
                <IconBox>
                  <IconSvg src={instagram_brands} alt="" />
                </IconBox>
                <IconBox>
                  <IconSvg src={facebook_brands} alt="" />
                </IconBox>
                <IconBox>
                  <IconSvg src={twitter_brands} alt="" />
                </IconBox>
                <IconBox>
                  <IconSvg src={pinterest_brands} alt="" />
                </IconBox>
                <IconBox>
                  <IconSvg src={snapchat_brands} alt="" />
                </IconBox>
              </div>
            </FooterNewsletter>
            <FooterProductlist>
              <SubTitle>상품</SubTitle>
              <ul>
                <Li>
                  <ListText>아이폰 케이스</ListText>
                </Li>
                <Li>
                  <ListText>위치밴드</ListText>
                </Li>
                <Li>
                  <ListText>삼성 핸드폰 케이스</ListText>
                </Li>
                <Li>
                  <ListText>아이패드 케이스</ListText>
                </Li>
                <Li>
                  <ListText>맥북 슬리브</ListText>
                </Li>
                <Li>
                  <ListText>브랜드 소개</ListText>
                </Li>
                <Li>
                  <ListText>콜라보레이션</ListText>
                </Li>
                <Li>
                  <ListText>기프트 카드</ListText>
                </Li>
                <Li>
                  <ListText>후기</ListText>
                </Li>
                <Li>
                  <ListText>매장 방문하기</ListText>
                </Li>
                <Li>
                  <ListText>사이트맵</ListText>
                </Li>
              </ul>
            </FooterProductlist>
            <FooterSupport>
              <SubTitle>지원</SubTitle>
              <ul>
                <Li>
                  <ListText>자주묻는 질문</ListText>
                </Li>
                <Li>
                  <ListText>직접 문의하기</ListText>
                </Li>
                <Li>
                  <ListText>팔기</ListText>
                </Li>
                <Li>
                  <ListText>학생 할인</ListText>
                </Li>
                <Li>
                  <ListText>추천</ListText>
                </Li>
                <Li>
                  <ListText>블로그</ListText>
                </Li>
                <Li>
                  <ListText>채용정보</ListText>
                </Li>
                <Li>
                  <ListText>주목받는 케이스!</ListText>
                </Li>
                <Li>
                  <ListText>반품</ListText>
                </Li>
              </ul>
            </FooterSupport>
          </FooterTop>

          <FooterBottom>
            <div>
              <Hr />
              <Div>
                <div>
                  <Copyright>Copyright © 2019 CASETiFY</Copyright>
                  <Span></Span>
                  <ATag>개인정보 처리방침</ATag>
                  <Span></Span>
                  <span>
                    <ATag>약관</ATag>
                  </span>
                </div>
                <LanguageSelect>
                  <Korean>
                    <Kr src={korea_logo} alt="" />
                    &nbsp; 한국어
                  </Korean>
                </LanguageSelect>
              </Div>
            </div>
          </FooterBottom>
        </FooterSection>
      </>
    );
  }
}

export default MainFooter;

//style

const FooterSection = styled.section`
  /* display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  padding: 200px; */
  /* border-top: 1px solid #ffffff; */
`;

//Top
const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #333333;
  padding-top: 30px;
  /* padding-bottom: 100px; */
`;

const FooterNewsletter = styled.div`
  font-size: 100px;
  color: white;
  /* width: 23%; */
  margin-right: 3%;
`;

const SubTitle = styled.div`
  text-transform: uppercase;
  margin-bottom: 1em;
  font-size: 16px;
  color: #ffffff;
`;

const NewsletterSubTitle = styled.div`
  text-transform: uppercase;
  margin-bottom: 1em;
  font-size: 16px;
  margin-top: 48px;
`;

const EmailInput = styled.input`
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  width: 250px;
  height: 43px;
  padding: 0 11px;
  -webkit-appearance: none;
  vertical-align: top;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  color: #666;
`;

const JoinInput = styled.input`
  background-color: #f15b47;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 44px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
`;

const IconBox = styled.a`
  color: #333;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
  width: 30px;
  height: 30px;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
`;

const IconSvg = styled.img`
  width: 20px;
  height: 20px;
`;
const FooterProductlist = styled.div`
  font-size: 100px;
  color: white;
  margin-right: 50px;
  width: 15%;
`;

const FooterSupport = styled.div`
  font-size: 100px;
  color: white;
  width: 15%;
`;

const Li = styled.li`
  padding: 3px 0;
  cursor: pointer;
`;

const ListText = styled.a`
  font-size: 12px;
  color: #ffffff;
`;
//Bottom
const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  padding: 25px;
  width: 100%;
`;

const Hr = styled.hr`
  margin-top: 18px;
  margin-bottom: 18px;
  border: 0;
  border-top: 1px solid #f2f2f2;
  box-sizing: content-box;
  height: 0;
  width: 946.66px;
  display: block;
  /* max-width: 100%; */
`;

const Span = styled.span`
  margin-left: 2em;
  margin-right: 2em;
  display: inline-block;
  content: "";
  width: 0;
  height: 1em;
  border-left: 1px solid white;
  position: relative;
  top: 2px;
`;

const Copyright = styled.span`
  font-size: 13px;
`;

const ATag = styled.a`
  font-size: 13px;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  color: #ffffff;
  justify-content: space-between;
`;
const Kr = styled.img`
  width: 1.7em;
`;

const LanguageSelect = styled.div`
  float: right !important;
  position: relative;
`;

const Korean = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;
