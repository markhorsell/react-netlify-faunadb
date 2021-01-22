import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  background-color: var(--secondary-bg-color);
  flex: 100%;
  justify-content: space-around;
  flex-wrap: nowrap;
`;
const NavLink = styled(Link)`
  display: flex;
  align-self: flex-end;

  color: var(--secondary-text-color);
  font-weight: 800;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <p>Remember to run netlify dev</p>
      <h1>Photostore</h1>
      <NavLink to="/add">Add Photo</NavLink>
      <NavLink to="/">Photo List</NavLink>
    </HeaderStyled>
  );
};

export default Header;
