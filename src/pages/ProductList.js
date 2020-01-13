import React from "react";
import heroImg from "../img/productlist_top.jpg";
import styled from "styled-components";
import CustomItem from "../components/ProductList/ProductItem";
import ITEM from "../components/data/ProductItemData";
const ProductList = () => {
  return (
    <>
      <Div>
        <HeroBox>
          <HeroImg src={heroImg} />
          <TopTextContainer>
            <TopText>
              <Title>아이폰 11 프로맥스 케이스</Title>
              <TopContent>
                뉴 아이폰 11 프로맥스 구매 계획이 있으신가요? 잘 찾아오셨습니다.
                9.8 피트 상공에서 떨어뜨려도 문제없는 보호력. 아이폰 11
                프로맥스를 위한 최고의 선택.
              </TopContent>
            </TopText>
          </TopTextContainer>
        </HeroBox>
        <CategoryContainer>
          <CategoryBox>
            <Category>
              <CategoryItem>CASETiFY</CategoryItem>
              <Span> / </Span>
              <CategoryItem>아이폰 케이스</CategoryItem>
              <Span> / </Span>
              <CategoryItem>아이폰 11 프로맥스</CategoryItem>
            </Category>
          </CategoryBox>
        </CategoryContainer>
        <ProductMainContiner>
          <ProductMainBox>
            <ProductContent>
              <ContentTitle>Signature Prints</ContentTitle>
              <Content>
                Say hi to the cutest printed cases ever for your 아이폰 11
                프로맥스. We've got you covered -- in style.
              </Content>
              <AllContent>Signature Prints 모두 보기</AllContent>
            </ProductContent>
            <ProductContainer>
              <ProductBox>
                <CustomList>
                  {ITEM.map(element => (
                    <CustomItem key={element.id} data={element} />
                  ))}
                </CustomList>
              </ProductBox>
            </ProductContainer>
          </ProductMainBox>
          <ProductMainBox>
            <ProductContent>
              <ContentTitle>커스텀 클리어 케이스</ContentTitle>
              <Content>
                케이스 위에 나만의 개성이 담긴 이니셜 또는 문구를 새겨보세요.
                커스텀 클리어 아이폰 11 프로맥스 케이스는 다양한 글자체와
                글자색, 레이아웃 등 다양한 옵션이 준비되어 있습니다. 다양한
                옵션으로 내 취향에 딱 맞는 케이스를 완성할 수 있어요.
              </Content>
              <AllContent>커스텀 클리어 케이스 모두 보기</AllContent>
            </ProductContent>
            <ProductContainer>
              <ProductBox>
                <CustomList>
                  {ITEM.map(element => (
                    <CustomItem key={element.id} data={element} />
                  ))}
                </CustomList>
              </ProductBox>
            </ProductContainer>
          </ProductMainBox>
        </ProductMainContiner>
      </Div>
    </>
  );
};
export default ProductList;

const Div = styled.div`
  color: #666;
`;
const HeroBox = styled.div`
  position: relative;
  overflow: hidden;
  background-color: rgb(235, 235, 235);
`;
const HeroImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  border: 0;
  vertical-align: middle;
  max-height: 300px;
`;

const TopTextContainer = styled.div`
  position: relative;
  padding: 24px 20px 48px 20px;
  width: 1200px;
  margin: 0 auto;
`;
const TopText = styled.div`
  margin: 0 -10px;
  text-align: center;
  width: 50%;
`;
const Title = styled.h1`
  padding: 0px;
  letter-spacing: 0.15px;
  text-align: center;
  font-size: 34px;
  line-height: 44.4px;
  color: #343434;
  font-family: "pangram";
`;
const TopContent = styled.p`
  width: 80%;
  margin-left: 10%;
  margin-top: 24px;
  text-align: center;
  font-weight: 400;
  font-family: "pangram";
  font-size: 14px;
`;
const Category = styled.div`
  padding: 0 10px;
  float: left;
`;
const CategoryContainer = styled.div`
  padding: 0 20px;
  width: 1200px;
  margin: 0 auto;
`;
const CategoryBox = styled.div`
  margin-top: 24px;
  display: inline-block;
`;
const CategoryItem = styled.a`
  color: #333;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  font-family: "pangram";
`;
const Span = styled.span``;
const ProductMainContiner = styled.div`
  padding: 0 20px;
  width: 1200px;
  margin: 0 auto;
`;
const ProductMainBox = styled.div`
  margin-top: 12px;
  display: flex;
`;
const ProductContent = styled.div`
  width: 25%;
  float: left;
  position: relative;
  min-height: 1px;
  padding: 0 10px;
`;
const ContentTitle = styled.h3`
  font-size: 20px;
  letter-spacing: 0.15px;
  margin-top: 48px;
`;
const Content = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 24px;
  line-height: 24px;
`;
const AllContent = styled.a`
  font-size: 14px;
  text-decoration: underline;
  background-color: transparent;
`;

const ProductContainer = styled.div`
  width: 75%;
  float: left;
  position: relative;
  min-height: 1px;
  padding: 0 10px;
`;
const ProductBox = styled.div``;
const CustomList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 9px;
`;
