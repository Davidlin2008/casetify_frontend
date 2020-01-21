import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import fb_icon from 'img/custom_page/social_fb.png';
import pinterest_icon from 'img/custom_page/social_pinterest.png';
import twitter_icon from 'img/custom_page/social_twitter.png';
import mail_icon from 'img/custom_page/social_mail.png';
import overlay from 'img/custom_page/overlay.png';
import camera from 'img/custom_page/full-img.png';

// redux
import { connect } from 'react-redux';

const ImagePreview = ({ addedText, selectedTextColor, selectedDesign }) => {
  const [activeId, setActiveId] = useState('0');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('data/ImagePreviewData.json')
      .then(res => res.json())
      .then(res => {
        setImages(res.images);
        setIsLoading(false);
      });
  }, []);

  const onClick = id => {
    setActiveId(id);
  };

  return (
    <Wrapper>
      {isLoading ? (
        <div>...</div>
      ) : (
        <>
          <SideList>
            <ThumbnailItem
              id="0"
              onClick={() => onClick('0')}
              isActive={activeId === '0'}
            >
              <ThumbnailImage id="0" src={images[0].preview} />
            </ThumbnailItem>
            {images.map((el, idx) => {
              if (el.id !== '0') {
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
            {activeId === '0' ? (
              <>
                <PreviewImage
                  isFirst
                  src={images[parseInt(activeId)].preview}
                />
                <FirstDivTp
                  img={overlay}
                  color={selectedTextColor}
                  design={selectedDesign}
                >
                  <CustomTextSpan design={selectedDesign}>
                    {addedText}
                  </CustomTextSpan>
                </FirstDivTp>
                <Camera src={camera} />
              </>
            ) : (
              <PreviewImage src={images[parseInt(activeId)].preview} />
            )}
            <SocialIconsWrapper>
              <SocialIcon src={fb_icon} />
              <SocialIcon src={pinterest_icon} />
              <SocialIcon src={twitter_icon} />
              <SocialIcon src={mail_icon} />
            </SocialIconsWrapper>
          </PreviewImageWrapper>
        </>
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    addedText: state.addedText,
    selectedTextColor: state.selectedTextColor,
    selectedDesign: state.selectedDesign,
  };
};

export default connect(mapStateToProps)(ImagePreview);

// Styled Components

const SocialIconsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  position: absolute;
  bottom: -50px;
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
  border: 3px solid ${props => (props.isActive ? 'black' : 'lightgray')};
`;

const ThumbnailImage = styled.img`
  ${props =>
    props.id === '0'
      ? css`
          width: auto;
          height: 100%;
          transform: translateX(50%);
        `
      : css`
          width: 100%;
          height: 100%;
        `}
`;

const PreviewImageWrapper = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
`;

const PreviewImage = styled.img`
  ${props =>
    props.isFirst
      ? css`
          position: absolute;
          transform: translateX(-50%);
          width: auto;
          height: 100%;
          left: 50%;
        `
      : css`
          width: 100%;
          height: auto;
        `}
`;

const FirstDivTp = styled.div`
  border-radius: 30px;
  position: absolute;
  top: 8%;
  left: 31%;
  overflow: hidden;
  width: 38%;
  height: 84%;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomTextSpan = styled.span`
  font-size: 70px;
  font-weight: 700;
  ${props =>
    props.design === 'Vertical' &&
    css`
      transform: rotate(90deg) translateY(-45px);
    `}
`;

const Camera = styled.img`
  height: 140px;
  width: 140px;
  position: absolute;
  top: 6%;
  left: 28%;
`;
