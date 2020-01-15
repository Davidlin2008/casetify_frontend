import React from "react";
import styled from "styled-components";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </Ul>
  );
};
export default Posts;

const Ul = styled.ul`
  height: 300px;
  overflow: hidden;
`;
