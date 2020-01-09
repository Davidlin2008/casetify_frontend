import React, { Component } from "react";
import styled from "styled-components";
import ItemList from "../ItemList";

export default class Collection extends Component {
  render() {
    const { collection } = this.props.data;

    const list = collection.map(element => (
      <ItemList key={element.id} data={element} />
    ));
    return <List>{list}</List>;
  }
}

const List = styled.div`
  margin-left: 10%;
  width: 50%;
  float: left;
  min-height: 1px;
  padding: 20px 10px 20px 10px;
  text-align: left;
  display: flex;
`;
