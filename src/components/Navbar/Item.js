import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Item extends Component {
  render() {
    const { data } = this.props;
    return (
      <ListItem>
        <Link to="product">
          <ItemLink>{data}</ItemLink>
        </Link>
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
