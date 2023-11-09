import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment'
import './CommentList.css';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };
  

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        //console.log(response.data); 
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [postId]);

  return (
    <div>
      <h2>Comments:</h2>
      <ul className="comment-list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} onDelete={handleDeleteComment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
