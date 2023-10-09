import React from "react";
import { useDispatch } from "react-redux";
import { getAuthUser } from "../../helpers/functions";

const CommentItem = ({ comment }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="max-w-xl p-8 mx-auto dark:bg-gray-800 dark:text-gray-100 border-sky-300">
        <ul className="space-y-12">
          <li className="flex items-start space-x-3">
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                <a
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                >
                  <span className="group-hover:underline dark:text-red-600 text-gray-600 ">
                    @{ comment.user }
                  </span>
                </a>
                <span className="text-xs whitespace-nowrap">10h ago</span>
              </div>
              <div>
                <p className="text-gray-600">
                  { comment.body }
                </p>
                {/* new */}
                {getAuthUser() === comment.user && (
                  <button>Delete</button>
                )}
                {/*  */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CommentItem;
