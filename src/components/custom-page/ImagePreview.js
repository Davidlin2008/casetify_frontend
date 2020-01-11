import React, { useState } from "react";
import styled from "styled-components";
import { IMAGES } from "./ImagePreviewData";
import fb_icon from "../../img/custom_page/social_fb.png";
import pinterest_icon from "../../img/custom_page/social_pinterest.png";
import twitter_icon from "../../img/custom_page/social_twitter.png";
import mail_icon from "../../img/custom_page/social_mail.png";

const ImagePreview = () => {
  const [activeId, setActiveId] = useState("0");

  const onClick = id => {
    setActiveId(id);
  };

  return (
    <Wrapper>
      <SideList>
        {IMAGES.map((el, idx) => (
          <ThumbnailItem
            key={idx}
            id={el.id}
            onClick={() => onClick(el.id)}
            isActive={activeId === el.id}
          >
            <ThumbnailImage src={el.preview} />
          </ThumbnailItem>
        ))}
      </SideList>
      <PreviewImageWrapper>
        <PreviewImage src={IMAGES[parseInt(activeId)].preview} />
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
`;

const PreviewImageWrapper = styled.div`
  max-width: 600px;
  max-height: 600px;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: auto;
`;
