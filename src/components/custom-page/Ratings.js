import React from "react";
import styled from "styled-components";
import star_filled from "../../img/custom_page/star-filled-23.svg";
import star_gray from "../../img/custom_page/star-gray-23.svg";

const Ratings = () => {
  return (
    <Wrapper>
      <StarsContainer>
        <Star src={star_filled} />
        <Star src={star_filled} />
        <Star src={star_gray} />
        <Star src={star_gray} />
        <Star src={star_gray} />
      </StarsContainer>
      <ReviewCount>5 후기</ReviewCount>
    </Wrapper>
  );
};

export default Ratings;

// Styled Components

const Wrapper = styled.div`
  margin: 12px 0;
  display: flex;
  align-items: center;
`;

const StarsContainer = styled.span``;

const Star = styled.img`
  width: 20px;
  margin-right: 3px;
`;

const ReviewCount = styled.span`
  color: #aaaaaa;
  font-family: "buenos";
  font-size: 14px;
  margin-left: 10px;
`;
