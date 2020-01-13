import React, { Component } from "react";
import styled from "styled-components";
class ColorItem extends Component {
  render() {
    const { data, choiceColor } = this.props;
    const { id } = this.props.data;
    return (
      <Li>
        <A
          data={data}
          onClick={() => {
            choiceColor(id);
          }}
        ></A>
      </Li>
    );
  }
}
export default ColorItem;

const Li = styled.li`
  width: 25%;
  float: left;
`;
const A = styled.a`
  color: #aaaaaa;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #e1e1e1;
  display: block;
  margin: 2px 2px 0;
  position: relative;
  cursor: pointer;
  background-color: ${props => props.data.color};
  background-image: url(${props => props.data.image});
  background: ${props => props.data.border};
  background-repeat: no-repeat no-repeat;
  background-position: center center;
  background-size: cover;
  :hover {
    content: "";
    border-radius: 50%;
    border: 1px solid #000;
  }
`;
