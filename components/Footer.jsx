import Link from "next/link";
import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <FooterPosition>
        <Link href="/">
          <a>Analyze</a>
        </Link>
        <Link href="/track">
          <a>Track work</a>
        </Link>
        <Link href="/add">
          <a>Add</a>
        </Link>
      </FooterPosition>
    </>
  );
};

const FooterPosition = styled.div`
  position: fixed;
  bottom: 0px;
  padding: 2% 0% 2% 0%;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
