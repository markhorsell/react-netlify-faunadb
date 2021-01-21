import React from "react";

import styled from "styled-components";
const Button = styled.button`
  background-color: orange;
`;
const BookmarkDiv = styled.div`
  border: 1px solid red;
  flex:0 0 100%;
  justify-content:space-between;
`;
const BookmarkItem = ({ _id, title, url, tag, handleEdit, handleDelete }) => {
  return (
    <BookmarkDiv>
      <div>
        <div className="title">
          <strong>Title: </strong>
          {title}
        </div>
        <div className="url">
          <strong>URL: </strong>
          {url}
        </div>
        <div className="tag">
          <strong>Tag: </strong>
          {tag}
        </div>
      </div>

      <div className="buttons">
        <div className="btn">
          <Button
            variant="info"
            type="submit"
            size="sm"
            onClick={() => handleEdit(_id)}
          >
            Edit
          </Button>
        </div>
        <div className="btn">
          <Button
            variant="danger"
            type="submit"
            size="sm"
            onClick={() => handleDelete(_id, title)}
          >
            Delete
          </Button>
        </div>
      </div>
    </BookmarkDiv>
  );
};
export default BookmarkItem;
