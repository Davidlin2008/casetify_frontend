import React from 'react';
import styled from 'styled-components';

const Pagination = ({ paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 5 /* Math.ceil(totalPosts / postsPerPage) */; i++) {
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
      {/* <Before onClick={() => before()}></Before>
      <After onClick={() => after()}></After> */}
    </Div>
  );
};
export default Pagination;

const Div = styled.div`
  position: absolute;
  bottom: -5%;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 20px;
  margin-bottom: 20px;
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
`;
const Before = styled.button`
  width: 50px;
  height: 20px;
`;
const After = styled.button`
  width: 50px;
  height: 20px;
`;
