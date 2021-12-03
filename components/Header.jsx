import styled from "styled-components";

export const Header = ({ header }) => {
  return <MainHeader>{header}</MainHeader>;
};

const MainHeader = styled.h1`
  display: block;
  font-size: 2rem;
  margin-block-start: 0em;
  margin-block-end: 0em;
  text-align: center;
  width: 100%;
`;
