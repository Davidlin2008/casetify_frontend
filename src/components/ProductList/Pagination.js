import React, { css } from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Div>
      <Ul>
        {pageNumbers.map(number => (
          <Li key={number}>
            <A onClick={() => paginate(number)} href="!#">
              {number}
            </A>
          </Li>
        ))}
      </Ul>
    </Div>
  );
};
export default Pagination;

const Div = styled.div`
  position: absolute;
  bottom: -2%;
  left: 50%;
  transform: translate(-50%, 0);
`;
const Ul = styled.ul``;
const Li = styled.li`
  float: left;
`;
const A = styled.button`
  border: none;
  background-color: transparent;
  padding: 8px 16px;
  :active {
    background-color: #ea594e;
    color: white;
  }
  {props=> props.}
`;
