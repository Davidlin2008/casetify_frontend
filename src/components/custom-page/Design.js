import React, { useState } from "react";
import styled from "styled-components";
import CustomBuilder from "./CustomBuilder";
import { DESIGNS } from "../data/DesignData";

const Design = () => {
  const [isClicked, setIsClicked] = useState("1");

  const onClick = id => {
    setIsClicked(id);
  };

  return (
    <>
      <DesignText>
        Choose Design: {DESIGNS[parseInt(isClicked) - 1].design_name}
      </DesignText>
      <DesignBoxContainer>
        {DESIGNS.map(design => (
          <DesignBox
            image={design.img_url}
            id={design.id}
            onClick={() => onClick(design.id)}
            active={isClicked === design.id}
          />
        ))}
      </DesignBoxContainer>
      <CustomBuilder />
    </>
  );
};

const DesignText = styled.p`
  color: #aaaaaa;
  margin-top: 15px;
  letter-spacing: 0;
`;

const DesignBoxContainer = styled.ul`
  display: block;
  margin-top: 10px;
`;

const DesignBox = styled.li`
  width: 40px;
  height: 40px;
  display: inline-block;
  background-image: url(${props => props.image});
  background-size: cover;
  border: 1px solid ${props => (props.active ? "black" : "#ccc")};
  transition: all 0.2s ease-out;
  filter: saturate(0.3);
  cursor: pointer;
  overflow: hidden;
  margin-right: 5px;
`;

export default Design;
