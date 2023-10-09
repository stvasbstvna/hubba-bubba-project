import React, { useState } from "react";
import { getAuthUser } from "../../helpers/functions";
import { useDispatch } from "react-redux";
import { createComment } from "../../store/comments/commentsActions";
import confetti from "canvas-confetti";

const CommentCreate = ({ product }) => {
  const [comment, setComment] = useState({
    commentContent: '',
    rating: ''
  });
  const dispatch = useDispatch();

  const altynaiConfetti = () => {
    confetti({
      particleCount: 10000,
      spread: 370,
      origin: { y: 1 },
    });
  };

  const addComment = () => {
    if((!comment.commentContent.trim()) || (comment.rating <= 0 || comment.rating > 5)) return alert('Change input values');

    const commentObj = {
      id: Date.now(),
      body: comment.commentContent,
      rating: comment.rating,
      user: getAuthUser()
    };

    dispatch(createComment({ productObj: product, commentObj }));

    setComment({
      commentContent: '',
      rating: ''
    });

    altynaiConfetti();
  };

  return (
    <>
      <fieldset className=" max-w-xl p-8 mx-auto space-y-1 dark:text-gray-100">
        <div className="flex w-2/4 h-8 border-spacing-x-28">
          <input
            onChange={(e) => setComment({ ...comment, commentContent: e.target.value })}
            value={comment.commentContent}
            type="text"
            placeholder="Enter comment content"
            className="w-full text-right border sm:text-sm rounded-l-md focus:ri text-gray-600"
          />

          <input
            onChange={(e) => setComment({ ...comment, rating: +e.target.value })}
            value={comment.rating}
            type="number"
            placeholder="Enter rating value"
            className="w-full text-right border sm:text-sm rounded-l-md focus:ri text-gray-600"
          />

          <button
            onClick={() => {
              addComment();
              // altynaiConfetti();
            }}
            className="flex items-center px-3 sm:text-sm rounded-r-md bg-pink-600  cursor-pointer"
          >
            send
          </button>
        </div>
      </fieldset>
    </>
  );
};

export default CommentCreate;
