import React, { useState } from "react";
import styled from "styled-components";
import ColorIcon from "./ColorIcon";
import { COLORS } from "../data/ColorData";

const CustomBuilder = () => {
  const [isClicked, setIsClicked] = useState("1");

  const onClick = id => {
    setIsClicked(id);
  };
  return (
    <Wrapper>
      <Label>Text</Label>
      <TextInput placeholder="MAX 3 CHARACTERS"></TextInput>
      <Label>색상</Label>
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
      <Label>Shadow</Label>
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
    </Wrapper>
  );
};

export default CustomBuilder;

// Styled Components

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 2px;
  border: 1px solid #e5e5e5;
`;

const Label = styled.label`
  color: #666666;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 12px 10px;
  font-size: 14px;
  line-height: 1.285714286;
  color: #666;
  background-color: #fff;
  background-image: none;
  border: 1px solid #aaa;
  border-radius: 2px;
  margin-bottom: 10px;
`;

const ColorIconsContainer = styled.ul`
  display: block;
  /* margin-top: 10px; */
`;
