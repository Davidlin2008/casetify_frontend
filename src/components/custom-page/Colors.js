import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ColorIcon from 'components/custom-page/ColorIcon';

// redux related imports
import { connect } from 'react-redux';
import { addColor } from 'redux/actions';

const Colors = ({ selectedColor, addColor }) => {
  const [isClicked, setIsClicked] = useState('1');
  const [colors, setColors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('data/ColorData.json')
      .then(res => res.json())
      .then(res => {
        setColors(res.colors);
        setIsLoading(false);
      });
  }, []);

  const onClick = id => {
    setIsClicked(id);
    addColor(colors[parseInt(id) - 1].color_name);
  };

  return (
    <>
      {isLoading ? (
        <div>...</div>
      ) : (
        <>
          <ColorsText>
            색상: {colors[parseInt(isClicked) - 1].color_name}
          </ColorsText>
          <ColorIconsContainer>
            {colors.map(color => (
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
      )}
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
