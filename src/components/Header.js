import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
const HeaderHeader = styled.header`
width:100%;
  display:flex;
  background-color: pink;
  flex:100%;
  justify-content:center;
  flex-wrap: nowrap;
`;
const NavLink = styled(Link)`
  display:flex;
 
  color:blue;
  font-weight:800;
 

`

const Header = () => {
  return (
    <HeaderHeader>
      <p>Remember to run 'netlify dev'</p>
      <h1>Bookmark Manager</h1>
     
        <NavLink to="/add" >
          Add Bookmark
        </NavLink>
        <NavLink to="/">
          Bookmarks List
        </NavLink>
    
    </HeaderHeader>
  );
};
export default Header;