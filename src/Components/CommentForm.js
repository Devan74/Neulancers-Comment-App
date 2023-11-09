import React, { useState } from "react";
import axios from "axios";
import "./CommentFrom.css";

const CommentForm = ({ postId, onCommentSubmit }) => {
  const [body, setContent] = useState("");

  const handleCommentSubmit = () => {
    const newComment = {
      body,
      userId: 1,
    };

    axios
      .post(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        newComment
      )
      .then((response) => {
        onCommentSubmit(response.data);
        //console.log('New Comment Data:', response.data);
        setContent("");
      })
      .catch((error) => {
        console.error("Error creating comment:", error);
      });
  };

  return (
    <div className="add-coment">
      <h2 className="comment-head">Add a Comment</h2>
      <div className="comments">
        <textarea
          rows="4"
          value={body}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="submit" onClick={handleCommentSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
