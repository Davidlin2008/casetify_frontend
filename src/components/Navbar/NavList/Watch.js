import React, { Component } from "react";
import styled from "styled-components";
import ItemList from "../ItemList";
import linkImg from "../image/watch.jpg";

export default class Watch extends Component {
  render() {
    const { watch } = this.props.data;

    const list = watch.map(element => (
      <ItemList key={element.id} data={element} />
    ));
    return (
      <List>
        {list}
        <Div>
          <WatchLink>
            <LinkImg src={linkImg}></LinkImg>
            <P>NEW! 나만의 워치 밴드 커스텀하기</P>
          </WatchLink>
        </Div>
      </List>
    );
  }
}

const List = styled.div`
  margin-left: 10%;
  width: 60%;
  float: left;
  min-height: 1px;
  padding: 20px 10px 20px 10px;
  text-align: left;
  display: flex;
`;
const Div = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 30%;
  flex: 2;
`;
const WatchLink = styled.a`
  color: #333;
  text-decoration: none;
  background-color: transparent;
  width: 100%;
`;
const LinkImg = styled.img`
  border: 0;
  width: 100%;
`;
const P = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: #343434;
`;
