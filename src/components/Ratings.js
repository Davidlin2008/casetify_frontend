import React from "react";
import styled from "styled-components";

const Ratings = () => {
  return (
    <Wrapper>
      <StarsContainer>
        <svg height="25" width="23">
          <polygon
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
            style={{ fillRule: "nonzero", fill: "rgb(255, 208, 85)" }}
          />
        </svg>
        <svg height="25" width="23">
          <polygon
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
            style={{ fillRule: "nonzero", fill: "rgb(255, 208, 85)" }}
          />
        </svg>
        <svg height="25" width="23">
          <polygon
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
            style={{ fillRule: "nonzero", fill: "rgba(51, 51, 51, 0.2)" }}
          />
        </svg>
        <svg height="25" width="23">
          <polygon
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
            style={{ fillRule: "nonzero", fill: "rgba(51, 51, 51, 0.2)" }}
          />
        </svg>
        <svg height="25" width="23">
          <polygon
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
            style={{ fillRule: "nonzero", fill: "rgba(51, 51, 51, 0.2)" }}
          />
        </svg>
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

const ReviewCount = styled.span`
  color: #aaaaaa;
  font-family: "buenos";
  font-size: 14px;
  margin-left: 10px;
`;
