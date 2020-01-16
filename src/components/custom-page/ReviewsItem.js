import React from "react";
import styled from "styled-components";
import star_filled from "../../img/custom_page/star-filled-23.svg";
import star_gray from "../../img/custom_page/star-gray-23.svg";

const ReviewsItem = ({ id, rating, name, date, title, body }) => {
  const stars = [];

  const genStars = rating => {
    for (let i = 0; i < rating; i++) {
      stars.push(<Star17 src={star_filled} />);
    }

    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<Star17 src={star_gray} />);
    }

    return stars;
  };

  return (
    <Review>
      <AvatarField />
      <DetailsWrapper>
        <NameField>{name}</NameField>
        <RatingsField>{genStars(rating)}</RatingsField>
        <TitleField>{title}</TitleField>
        <BodyField>{body}</BodyField>
        <DateField>{date}</DateField>
      </DetailsWrapper>
    </Review>
  );
};

export default ReviewsItem;

// Styled Components

const Review = styled.li`
  display: flex;
  padding: 25px 0 22px;
  position: relative;
  font-family: "Open Sans";
  border-bottom: 1px solid lightgray;
`;

const AvatarField = styled.div`
  min-width: 45px;
  min-height: 45px;
  max-width: 45px;
  max-height: 45px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: lightblue;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameField = styled.span`
  font-size: 12px;
  color: #333;
  font-weight: bold;
  margin-bottom: 3px;
  letter-spacing: 0;
`;

const RatingsField = styled.span`
  margin-bottom: 5px;
`;

const Star17 = styled.img`
  width: 16px;
  margin-right: 2px;
`;

const TitleField = styled.div`
  color: #6b6d76;
  font-weight: 600;
`;

const BodyField = styled.p`
  color: #6b6d76;
  width: 90%;
`;

const DateField = styled.span`
  position: absolute;
  right: 50px;
  top: 30px;
  font-size: 12px;
  letter-spacing: 0;
  color: gray;
`;
