import React, { useState } from 'react';
import axios from 'axios';
import './Comment.css';

const Comment = ({ comment, onDelete }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(comment.body);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdate = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/comments/${comment.id}`, {
        body: updatedContent,
      })
      .then((response) => {
        setEditing(false);
        //setUpdatedContent(response.data.body);
        //console.log(response.data.body)
        console.log("Updated Content:", updatedContent);
      })
      .catch((error) => {
        console.error('Error updating comment:', error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/comments/${comment.id}`)
      .then(() => {
        onDelete(comment.id); 
      })
      .catch((error) => {
        console.error('Error deleting comment:', error);
      });
  };

  return (
    <li className="comment">
      {isEditing ? (
        <div>
          <textarea
            rows="4"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          <p>Author: {comment.id}</p>
          <p>{updatedContent}</p>
          <p>Created at: {}</p>
          <div className="comment-actions">
            <button className="edit" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Comment;
