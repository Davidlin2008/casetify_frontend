import React, { useState } from "react";
import styled, { css } from "styled-components";
import { IMAGES } from "./ImagePreviewData";
import fb_icon from "../../img/custom_page/social_fb.png";
import pinterest_icon from "../../img/custom_page/social_pinterest.png";
import twitter_icon from "../../img/custom_page/social_twitter.png";
import mail_icon from "../../img/custom_page/social_mail.png";
import TpLayer from "../../img/custom_page/output-onlinepngtools.png";
import overlay from "../../img/custom_page/overlay.png";
import camera from "../../img/custom_page/full-img.png";

const ImagePreview = () => {
  const [activeId, setActiveId] = useState("0");

  const onClick = id => {
    setActiveId(id);
  };

  return (
    <Wrapper>
      <SideList>
        <ThumbnailItem
          id="0"
          onClick={() => onClick("0")}
          isActive={activeId === "0"}
        >
          <ThumbnailImage id="0" src={IMAGES[0].preview} />
        </ThumbnailItem>
        {IMAGES.map((el, idx) => {
          if (el.id !== "0") {
            return (
              <ThumbnailItem
                key={idx}
                id={el.id}
                onClick={() => onClick(el.id)}
                isActive={activeId === el.id}
              >
                <ThumbnailImage src={el.preview} />
              </ThumbnailItem>
            );
          }
        })}
      </SideList>
      <PreviewImageWrapper>
        {activeId === "0" ? (
          <>
            <PreviewImage isFirst src={IMAGES[parseInt(activeId)].preview} />
            <FirstImgTp src="https://cdn.casetify.com/img/template/overlay_iphone11-pro-single-16000246.png" />
            <FirstDivTp img={overlay}>
              ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC
              ABC ABC ABC ABC ABC
            </FirstDivTp>
            <Camera src={camera} />
          </>
        ) : (
          <PreviewImage src={IMAGES[parseInt(activeId)].preview} />
        )}

        <SocialIconsWrapper>
          <SocialIcon src={fb_icon} />
          <SocialIcon src={pinterest_icon} />
          <SocialIcon src={twitter_icon} />
          <SocialIcon src={mail_icon} />
        </SocialIconsWrapper>
      </PreviewImageWrapper>
    </Wrapper>
  );
};

export default ImagePreview;

// Styled Components

const SocialIconsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const SocialIcon = styled.img`
  margin-right: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SideList = styled.ul`
  width: 100px;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const ThumbnailItem = styled.li`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  border: 3px solid ${props => (props.isActive ? "black" : "lightgray")};
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  ${props =>
    props.id === "0"
      ? css`
          width: auto;
          height: 100%;
          transform: translateX(50%);
        `
      : ""}
`;

const PreviewImageWrapper = styled.div`
  max-width: 600px;
  max-height: 600px;
  position: relative;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  ${props =>
    props.isFirst
      ? css`
          width: auto;
          height: 100%;
          transform: translateX(50%);
        `
      : ""}
`;

const FirstImgTp = styled.img`
  height: 100%;
  transform: translateX(50%);
  position: absolute;
  top: 0;
  left: 0;
`;

const FirstDivTp = styled.div`
  border: 1px solid white;
  border-radius: 30px;
  width: 78%;
  height: 84%;
  font-size: 50px;
  transform: translateX(50%);
  position: absolute;
  top: 8%;
  left: 22%;
  color: white;
  overflow: hidden;
  word-break: break-all;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Camera = styled.img`
  height: 140px;
  width: 140px;
  transform: translateX(50%);
  position: absolute;
  top: 6%;
  left: 33%;
`;
