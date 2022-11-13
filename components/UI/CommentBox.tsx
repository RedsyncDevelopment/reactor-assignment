import React from "react";
import { CommentInterface } from "../../types";
import { urlRegex } from "../../utils/constants";

interface CommentBoxProps {
  comment: CommentInterface;
}

const CommentBox: React.FC<CommentBoxProps> = ({ comment }) => {
  const commentText = comment.text.split(urlRegex).filter((i) => i);

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col space-y-2  border-[1px] border-secondary-400">
      <h1 className="text-secondary-900 font-semibold">
        {comment.author.name}
      </h1>
      <p className="font-medium">
        {commentText.map((line, idx) =>
          line.match(urlRegex) ? (
            <a key={idx} className="text-primary-400 underline" href={line}>
              {line}
            </a>
          ) : (
            <p key={idx} className="text-secondary-700">
              {line}
            </p>
          )
        )}
      </p>
    </div>
  );
};

export default CommentBox;
