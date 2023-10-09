import React, { useState } from "react";
import { getAuthUser } from "../../helpers/functions";
import { useDispatch } from "react-redux";
import confetti from "canvas-confetti";

const CommentCreate = () => {
  const [commentContent, setCommentContent] = useState("");
  const dispatch = useDispatch();

  const altynaiConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };
  const addComment = () => {
    if (!commentContent.trim()) return;
    console.log(commentContent);
  };

  return (
    <>
      <fieldset className=" max-w-xl p-8 mx-auto space-y-1 dark:text-gray-100">
        <div className="flex w-2/4 h-8 border-spacing-x-28">
          <input
            onChange={(e) => setCommentContent(e.target.value)}
            value={commentContent}
            type="text"
            placeholder="Enter comment content"
            className="w-full text-right border sm:text-sm rounded-l-md focus:ri text-gray-600"
          />
          <button
            onClick={() => {
              addComment();
              altynaiConfetti();
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
