import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoContainer = () => {
  return (
    <VideoBox>
      <VideoRow>
        <VideoRow2>
          <PaddingLeft>
            <TextTop>
              세상에서 가장
              <TextTopSub>슬림하고 강력한</TextTopSub>
              <TextTopSub2>핸드폰 케이스</TextTopSub2>
              <Div>
                <Hr />
              </Div>
            </TextTop>
            <TextCenter>
              이중 구조의 qitech™ 범퍼. 2m 높이 낙하 테스트 통과.
            </TextCenter>
            <TextBottom>
              <TextBottomSub>아이폰 11 프로 맥스 케이스 둘러보기</TextBottomSub>
            </TextBottom>
          </PaddingLeft>
          <PaddingRight>
            <VideoPlay
              src="https://cdn-stamplib.casetify.com/cms/video/bbdc9df081a0da3c42b905617b8e2b38.mp4"
              autoPlay
              loop
              controls
              muted="muted"
            ></VideoPlay>
          </PaddingRight>
        </VideoRow2>
      </VideoRow>
    </VideoBox>
  );
};

export default VideoContainer;

const VideoBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 90px;
  margin-top: 50px;
`;

const VideoRow = styled.div`
  /* height: 452px; */
  width: 70%;
`;

const VideoRow2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaddingLeft = styled.div`
  width: 50%;
  color: #343434;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;
const Hr = styled.hr`
  margin-top: 25px;
  width: 50px;
  border: none;
  border-bottom: 1px solid #b2b2b2;
`;

const TextTop = styled.h1`
  font-weight: bold;
  font-size: 42px;
  position: relative;
  text-align: center;
  line-height: 55px;
`;

const TextTopSub = styled.span`
  font-weight: bold;
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 42px;
`;

const TextTopSub2 = styled.span`
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-size: 42px;
`;

const TextCenter = styled.p`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const TextBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const TextBottomSub = styled.a`
  background-color: #ea594e;
  color: #ffffff;
  padding: 15px;
  font-size: 15px;
  border-radius: 2px;
  cursor: pointer;
  :hover {
    background-color: #e42f1f;
  }
`;

const PaddingRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoPlay = styled.video`
  width: 87%;
`;
