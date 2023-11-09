import React, { useState } from 'react';
import CommentList from './Components/CommentList';
import CommentForm from './Components/CommentForm';
import './App.css';

function App() {
  
  const postId = 1; 

  
  const [newComments, setNewComments] = useState([]);

 
  const handleCommentSubmit = (comment) => {
    setNewComments([...newComments, comment]);
    //console.log("New Comment Data:", comment);
  };

  return (
    <div className="App">
      <h1 className='heading'>Post Comments</h1>
      <div className="comments-container">
        <CommentList postId={postId} newComments={newComments} setNewComments={setNewComments} />
        <CommentForm postId={postId} onCommentSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
}

export default App;
