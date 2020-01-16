import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ColorIcon from "./ColorIcon";
import { COLORS } from "../data/ColorData";

// redux
import { connect } from "react-redux";
import { addText } from "../../redux/actions";

const CustomBuilder = ({ addText }) => {
  const [isClicked, setIsClicked] = useState("1");
  const [customInput, setCustomInput] = useState("ABC");

  const onChange = e => {
    setCustomInput(e.target.value);
  };

  useEffect(() => {
    addText(customInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customInput]);

  const onClick = id => {
    setIsClicked(id);
  };

  return (
    <Wrapper>
      <Label>Text</Label>
      <TextInput
        value={customInput}
        onChange={onChange}
        placeholder="MAX 3 CHARACTERS"
      ></TextInput>
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
      {/* <ColorIconsContainer>
        {COLORS.map(color => (
          <ColorIcon
            id={color.id}
            name={color.color_name}
            color={color.color_code}
            onClick={onClick}
            active={isClicked === color.id}
          />
        ))}
      </ColorIconsContainer> */}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    addedText: state.addedText
  };
};

export default connect(mapStateToProps, { addText })(CustomBuilder);

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
