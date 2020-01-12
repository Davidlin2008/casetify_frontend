import React from "react";
import styled from "styled-components";
import star_filled from "../../img/custom_page/star-filled-23.svg";
import star_gray from "../../img/custom_page/star-gray-23.svg";

const Reviews = () => {
  return (
    <>
      <ReviewsSection>
        <ContentWrapper>
          <TabsWrapper>
            <Tab>상품 정보</Tab>
            <Tab>상품 후기</Tab>
          </TabsWrapper>
          <InnerWrapper>
            <ReviewsHeaderText>상품 후기</ReviewsHeaderText>
            <TotalRatingsBox>
              <SumReviewsBox>
                <StarsWrapper>
                  <Star20 src={star_filled} />
                  <Star20 src={star_filled} />
                  <Star20 src={star_filled} />
                  <Star20 src={star_filled} />
                  <Star20 src={star_filled} />
                </StarsWrapper>
                <NumReviews>11 Reviews</NumReviews>
              </SumReviewsBox>
              <SumReviewsBarsBox>
                <div>
                  <Star15 src={star_filled} />
                  <Star15 src={star_filled} />
                  <Star15 src={star_filled} />
                  <Star15 src={star_filled} />
                  <Star15 src={star_filled} />
                </div>
                <div>
                  <Star15 src={star_filled} />
                  <Star15 src={star_filled} />
                  <Star15 src={star_filled} />
                  <Star15 src={star_filled} />
                  <Star15 src={star_gray} />
                </div>
                <div>
                  <Star15 src={star_filled} />
                  <Star15 src={star_filled} />
                  <Star15 src={star_filled} />
                  <Star15 src={star_gray} />
                  <Star15 src={star_gray} />
                </div>
                <div>
                  <Star15 src={star_filled} />
                  <Star15 src={star_filled} />
                  <Star15 src={star_gray} />
                  <Star15 src={star_gray} />
                  <Star15 src={star_gray} />
                </div>
                <div>
                  <Star15 src={star_filled} />
                  <Star15 src={star_gray} />
                  <Star15 src={star_gray} />
                  <Star15 src={star_gray} />
                  <Star15 src={star_gray} />
                </div>
              </SumReviewsBarsBox>
            </TotalRatingsBox>
          </InnerWrapper>
        </ContentWrapper>
      </ReviewsSection>
    </>
  );
};

export default Reviews;

// Styled Components

const TabsWrapper = styled.ul`
  position: absolute;
  width: 100%;
  top: -33px;
`;

const Tab = styled.li`
  background-color: #fff;
  display: inline-block;
  padding: 5px 20px;
  border: 1px solid #f2f2f2;
`;

const ReviewsSection = styled.section`
  margin-top: 70px;
  width: 100%;
  background-color: #f2f2f2;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1150px;
  margin: auto;

  @media (max-width: 1450px) {
    max-width: 1000px;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const ReviewsHeaderText = styled.p`
  font-size: 18px;
  color: #666666;
  margin-bottom: 10px;
`;

const TotalRatingsBox = styled.div`
  padding: 25px 0 22px;
  border-top: 1px solid #e3e3e3;
`;

const SumReviewsBox = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-right: 20px;
  border-right: 1px solid #e3e3e3;
  margin-right: 10px;
`;

const StarsWrapper = styled.span`
  display: block;
`;

const Star20 = styled.img`
  width: 20px;
  margin-right: 3px;
`;

const Star15 = styled.img`
  width: 14px;
  margin-right: 2px;
`;

const NumReviews = styled.span`
  display: block;
  font-family: sans-serif;
  font-weight: 300;
  color: #6a6c77;
`;

const SumReviewsBarsBox = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 15px;
`;
