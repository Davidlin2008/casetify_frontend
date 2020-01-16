import React, { useState } from "react";
import styled from "styled-components";
import ColorIcon from "components/custom-page/ColorIcon";
import { COLORS } from "components/data/ColorData";

import { connect } from "react-redux";
import { addColor } from "redux/actions";

const Colors = ({ selectedColor, addColor }) => {
  const [isClicked, setIsClicked] = useState("1");

  console.log("selected");

  const onClick = id => {
    setIsClicked(id);
    addColor(COLORS[parseInt(id) - 1].color_name);
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

const mapStateToProps = state => {
  return { selectedColor: state.selectedColor };
};

// export default connect(mapStateToProps, { addColor })(Colors);
export default connect(mapStateToProps, { addColor })(Colors);

// Styled Components

const ColorsText = styled.p`
  color: #aaaaaa;
  margin-top: 20px;
`;

const ColorIconsContainer = styled.ul`
  display: block;
  margin-top: 10px;
`;
