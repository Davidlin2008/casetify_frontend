import React, { Component } from "react";
import styled from "styled-components";

class Item extends Component {
  render() {
    const { data } = this.props;
    return (
      <ListItem>
        <ItemLink>{data}</ItemLink>
      </ListItem>
    );
  }
}

export default Item;

const ListItem = styled.li`
  font-size: 13px;
  line-height: 2em;
`;
const ItemLink = styled.a``;
