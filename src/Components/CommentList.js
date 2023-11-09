import React, {  useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment'
import './CommentList.css';

const CommentList = ({ postId ,setNewComments,newComments}) => {
  //const [comments, setComments] = useState([]);

  

  const handleDeleteComment = (commentId) => {
    setNewComments(newComments.filter((comment) => comment.id !== commentId));
  };
  

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        //console.log(response.data); 
        setNewComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [postId]);

  return (
    <div>
      <h2 className='comments-head'>Comments:</h2>
      <ul className="comment-list">
        {newComments.map((comment) => (
          <Comment key={comment.id} comment={comment} onDelete={handleDeleteComment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
