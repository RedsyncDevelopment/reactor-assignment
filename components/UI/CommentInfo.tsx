import React from "react";
import { BsDot } from "react-icons/bs";
import { CommentInterface } from "../../types";

interface CommentInfoProps {
  comment: CommentInterface;
  numberOfReplies?: number;
  isFormOpen: boolean;
  onFormOpen: () => void;
}

const CommentInfo: React.FC<CommentInfoProps> = ({
  comment,
  numberOfReplies,
  isFormOpen,
  onFormOpen,
}) => {
  const time = new Date(comment.timestamp).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex space-x-2 items-center">
      <time className="text-secondary-700 text-sm">{time}</time>
      <BsDot className="text-secondary-700 w-2 h-2" />
      <button onClick={onFormOpen} className="text-primary-400 text-sm">
        {!isFormOpen
          ? `Reply ${numberOfReplies ? `(${numberOfReplies})` : ""}`
          : "Close"}
      </button>
    </div>
  );
};

export default CommentInfo;
