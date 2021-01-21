import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import Home from '../components/Home';
import AddBookmark from '../components/AddBookmark';
import EditBookmark from '../components/EditBookmark';
import BookmarkList from '../components/BookmarkList';
import Header from '../components/Header';
import { theme } from '../styles/theme'

const ContainerDiv = styled.div`
  background-color: orange;
  max-width:1000px;

`;


const AppRouter = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <ContainerDiv>
      <Header />
      <div className="bookmark-form">
        <Switch>
          <Route component={Home} path="/" exact={true} />
          <Route component={BookmarkList} path="/list" />
          <Route component={AddBookmark} path="/add" />
          <Route component={EditBookmark} path="/edit/:id" />
        </Switch>
      </div>
      </ContainerDiv>
    </ThemeProvider>
 
  </BrowserRouter>
);
export default AppRouter;