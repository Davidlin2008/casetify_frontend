import React from "react";
import MainHeader from "../components/MainHeader/MainHeader";
import VideoContainer from "../components/VideoContainer/VideoContainer";
import ProductContainer from "../components/ProductContainer/ProductContainer";
import IgShopContainer from "../components/IgShopContainer/IgShopContainer";
import NewStuff from "../components/NewStuff/NewStuff";
import MainFooter from "../components/MainFooter/MainFooter";

//슬라이드 쇼 갤러리 구성요소
const collection = [
  {
    src:
      "https://cdn-stamplib.casetify.com/cms/video/6a1f8d85996d616a9ffed19d56ccaa89.mp4",
    caption: "DHL X CASETiFY",
    btn: "둘러보기"
  },
  {
    src:
      "https://cdn-stamplib.casetify.com/cms/video/8103d0115e30c93433d1aa5971d0ff21.mp4",
    caption: "Monogram Studio",
    btn: "커스텀 제작하기"
  },
  {
    src:
      "https://cdn-stamplib.casetify.com/cms/image/ad625d12ca2350073c0160e683284f08.jpg",
    caption: "The M Jewelers x CASETiFY",
    btn: "둘러보기"
  },
  {
    src:
      "https://cdn-stamplib.casetify.com/cms/image/8746f7b294f16c92261419928c52bc6d.jpg",
    caption: "Duo-Color Leather Watch Band",
    btn: "CUSTOMIZE NOW"
  },
  {
    src:
      "https://cdn-stamplib.casetify.com/cms/video/9b1f41fb0228e39b5795ee6fa112770b.mp4",
    caption: "아이폰 11 케이스 출시",
    btn: "아이폰 11 프로 맥스 케이스 둘러보기"
  },
  {
    src:
      "https://cdn-stamplib.casetify.com/cms/image/c57fb6449d144f711f84a591ee22f6a4.jpg",
    caption: "PP®F x CASETiFY",
    btn: "컬렉션 둘러보기"
  }
];

const Home = () => {
  return (
    <div>
      {/* <h1>hi</h1> */}
      <MainHeader
        input={collection} //이미지 정보를 포함하는 배열로, 각 요소는 src-이미지 경로 및 캡션-이미지 제목의 객체이다.
        ratio={`3:2`} //ratio (String) : string은 폭 : 높이 비율을 나타낸다. (예 : "3 : 2"). 너비는 항상 100 %이므로이 비율로 전달하면된다.
        mode={`automatic`} //실행 유형을 뜻함. 수동 및 자동의 두 값이 있다. 자동 실행의 경우 "시간 초과"값을 전달해야한다. 이미지 사이의 시간 (기본값은 6000ms)이다.
        timeout={`6000`}
      />
      <VideoContainer />
      <ProductContainer />
      <IgShopContainer />
      <NewStuff />
      <MainFooter />
    </div>
  );
};

export default Home;
