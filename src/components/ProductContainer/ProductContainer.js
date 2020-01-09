import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

class ProductContainer extends Component {
  render() {
    return (
      <>
        <ProductSection>
          <div>
            <ProductContent>
              <ATag>
                <ProductImg1 />
                <Span>
                  <Div>아이폰 케이스 둘러보기</Div>
                </Span>
              </ATag>
              <ATag>
                <ProductImg2 />
                <Span>
                  <Div>애플 워치 밴드 둘러보기</Div>
                </Span>
              </ATag>
            </ProductContent>

            <ProductContent>
              <ATag>
                <ProductImg3 />
                <Span>
                  <Div>아이패트 케이스 둘러보기</Div>
                </Span>
              </ATag>
              <ATag>
                <ProductImg4 />
                <Span>
                  <Div>맥북 케이스 둘러보기</Div>
                </Span>
              </ATag>
            </ProductContent>

            <ProductContent2>
              <ATag>
                <ProductImg5 />
                <Span>
                  <Div>주문제작 케이스 둘러보기</Div>
                </Span>
              </ATag>
              <ATag>
                <ProductImg6 />
                <Span>
                  <Div>테크 액세서리 보러가기</Div>
                </Span>
              </ATag>
              <ATag>
                <ProductImg7 />
                <Span>
                  <Div>안드로이드 핸드폰 케이스 둘러보기</Div>
                </Span>
              </ATag>
            </ProductContent2>
          </div>
        </ProductSection>
      </>
    );
  }
}

export default ProductContainer;

//style

const ProductSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const ProductContent = styled.div`
  display: flex;
`;

const ProductContent2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ATag = styled.a`
  position: relative;
  display: block;
  cursor: pointer;
  :hover span {
    background-color: black;
  } /*ATag 호버시 Span 백그라운드 색상 변경 */
`;

const Span = styled.span`
  display: block;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 15px;
  left: 15px;
`;

const Div = styled.div`
  font-size: 16px;
  padding: 8px;
`;

const ProductImg1 = styled.img`
  display: block;
  background-image: url("https://cdn-stamplib.casetify.com/cms/image/81398c9b42b597fb02dda584058a249c.jpg.webp");
  background-repeat: no-repeat;
  width: 570px;
  height: 427.5px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const ProductImg2 = styled.img`
  display: block;
  background-image: url("https://cdn-stamplib.casetify.com/cms/image/d0461813c49414da62a46dfcc8fb0922.jpg.webp");
  background-repeat: no-repeat;
  width: 570px;
  height: 427.5px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;

  /* margin-right: 20px; */
`;

const ProductImg3 = styled.img`
  display: block;
  background-image: url("https://cdn-stamplib.casetify.com/cms/image/2cb6f3f5cb57d06947456500cda76875.jpg.webp");
  background-repeat: no-repeat;
  width: 570px;
  height: 427.5px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const ProductImg4 = styled.img`
  display: block;
  background-image: url("https://cdn-stamplib.casetify.com/cms/image/513c7df979d2fc8c07bf277911260afe.jpg.webp");
  background-repeat: no-repeat;
  width: 570px;
  height: 427.5px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  /* margin-right: 20px; */
  margin-bottom: 20px;
`;

const ProductImg5 = styled.img`
  display: block;
  background-image: url("https://cdn-stamplib.casetify.com/cms/image/e5f4bb3797ed70262ad9a83a5174bbd0.jpg.webp");
  background-repeat: no-repeat;
  width: 373.33px;
  height: 279.98px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
`;

const ProductImg6 = styled.img`
  display: block;
  background-image: url("https://cdn-stamplib.casetify.com/cms/image/f80a28b371a4a43b5179b25c9e95cd34.jpg.webp");
  background-repeat: no-repeat;
  width: 373.33px;
  height: 279.98px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
`;

const ProductImg7 = styled.img`
  display: block;
  background-image: url("https://cdn-stamplib.casetify.com/cms/image/f044755ba281216a82045cff9e0cd060.jpg.webp");
  background-repeat: no-repeat;
  width: 373.33px;
  height: 279.98px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
`;
