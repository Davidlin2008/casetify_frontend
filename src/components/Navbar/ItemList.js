import React, { Component } from "react";
import styled from "styled-components";
import Item from "./Item";

export class ItemList extends Component {
  render() {
    const { name, item } = this.props.data;
    return (
      <ListUl>
        <ListLi>{name}</ListLi>
        {item.map((element, index) => (
          <Item key={index} data={element} />
        ))}
      </ListUl>
    );
  }
}

export default ItemList;

const ListUl = styled.ul`
  padding-right: 10px;
  list-style: none;
  flex: 1;
  letter-spacing: -1px;
`;
const ListLi = styled.li`
  font-weight: bold;
  padding-bottom: 0.5em;
  color: #343434;
  list-style: none;
  font-size: 14px;
  letter-spacing: -1px;
`;
