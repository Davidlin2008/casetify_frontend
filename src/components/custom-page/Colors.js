import React, { useState } from "react";
import styled from "styled-components";
import ColorIcon from "./ColorIcon";
import { COLORS } from "../data/ColorData";

const Colors = () => {
  const [isClicked, setIsClicked] = useState("1");

  const onClick = id => {
    setIsClicked(id);
  };

  return (
    <>
      <ColorsText>
        색상: {COLORS[parseInt(isClicked) - 1].color_name}
      </ColorsText>
      <ColorIconsContainer>
        {COLORS.map(color => (
          <ColorIcon
            id={color.id}
            name={color.color_name}
            color={color.color_code}
            onClick={onClick}
            active={isClicked === color.id}
          />
        ))}
      </ColorIconsContainer>
    </>
  );
};

const ColorsText = styled.p`
  color: #aaaaaa;
  margin-top: 20px;
`;

const ColorIconsContainer = styled.ul`
  display: block;
  margin-top: 10px;
`;

export default Colors;
