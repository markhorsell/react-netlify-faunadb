import React from 'react';
import BookmarkItem from './BookmarkItem';
import styled from "styled-components";

const BookmarkListDiv = styled.div`
  border: 1px solid green;
  flex:0 0 100%;
`;

const BookmarkList = ({ bookmarks, handleEdit, handleDelete }) => {
  return (
    <BookmarkListDiv>
      {bookmarks.map((bookmark) => (
        <BookmarkItem
          key={bookmark._id}
          {...bookmark}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </BookmarkListDiv>
  );
};
export default BookmarkList;