import React, { useState } from 'react';
import { getAuthUser } from '../../helpers/functions';
import { useDispatch } from 'react-redux'; 


const CommentCreate = () => {
  const [commentContent, setCommentContent] = useState('');
  const dispatch = useDispatch();

  const addComment = () => {
    if(!commentContent.trim()) return;
    console.log(commentContent);
  };

  return (
    <div>
      <input type="text" placeholder="Enter comment content" onChange={(e) => setCommentContent(e.target.value)} value={commentContent} />
      <button onClick={addComment}>Create</button>
    </div>
  )
}

export default CommentCreate