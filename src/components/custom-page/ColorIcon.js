import React from "react";
import styled, { css } from "styled-components";

const ColorIcon = ({ id, color, onClick, active }) => {
  return (
    <Container>
      <Icon
        color={color}
        onClick={() => onClick(id, color)}
        isActive={active}
      />
    </Container>
  );
};

export default ColorIcon;

// Styled Components

const Container = styled.li`
  display: inline-block;
  width: 36px;
  height: 39px;
  margin-top: 3px;
`;

const Icon = styled.a`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #e1e1e1;
  cursor: pointer;
  display: block;
  position: relative;
  margin-top: 3px;
  margin-right: 8px;
  background-color: ${props => props.color};

  &:hover::after {
    content: "";
    display: block;
    top: -3px;
    left: -3px;
    border-radius: 50%;
    border: 1px solid #333;
    width: 30px;
    height: 30px;
    position: absolute;
  }

  ${props =>
    props.isActive &&
    css`
      &::after {
        content: "";
        display: block;
        top: -3px;
        left: -3px;
        border-radius: 50%;
        border: 1px solid #333;
        width: 30px;
        height: 30px;
        position: absolute;
      }
    `}
`;
