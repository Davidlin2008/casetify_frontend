import React, { useState } from 'react';
import styled from 'styled-components';
import CustomBuilder from 'components/custom-page/CustomBuilder';
import { DESIGNS } from 'components/data/DesignData';

// redux
import { connect } from 'react-redux';
import { chooseDesign } from '../../redux/actions';

const Design = ({ chooseDesign }) => {
  const [isClicked, setIsClicked] = useState('1');

  const onClick = id => {
    setIsClicked(id);
    chooseDesign(DESIGNS[parseInt(id) - 1].design_name);
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

const mapStateToProps = state => {
  return {
    selectedDesign: state.selectedDesign,
  };
};

export default connect(mapStateToProps, { chooseDesign })(Design);

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
  border: 1px solid ${props => (props.active ? 'black' : '#ccc')};
  transition: all 0.2s ease-out;
  filter: saturate(0.3);
  cursor: pointer;
  overflow: hidden;
  margin-right: 5px;
`;
