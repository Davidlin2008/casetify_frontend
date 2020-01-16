import React, { useState } from "react";
import styled from "styled-components";
import ColorIcon from "components/custom-page/ColorIcon";
import { COLORS } from "components/data/ColorData";

// redux
import { connect } from "react-redux";
import { addText, chooseTextColor } from "redux/actions";

const CustomBuilder = ({ addText, chooseTextColor, selectedDesign }) => {
  const [isClicked, setIsClicked] = useState("1");
  const [customInput, setCustomInput] = useState("ABC");

  const onChange = e => {
    setCustomInput(e.target.value);
    addText(e.target.value);
  };

  const onClick = (id, color) => {
    setIsClicked(id);
    chooseTextColor(color);
  };

  return (
    <Wrapper>
      <Label>Text</Label>
      <TextInput
        value={customInput}
        onChange={onChange}
        placeholder="MAX 4 CHARACTERS"
        maxLength={selectedDesign === "Custom Text" ? "4" : "10"}
      />
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
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    addedText: state.addedText,
    selectedDesign: state.selectedDesign
  };
};

export default connect(mapStateToProps, { addText, chooseTextColor })(
  CustomBuilder
);

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
