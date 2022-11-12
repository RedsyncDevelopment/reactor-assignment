import React from "react";
import { CommentInterface } from "../../types";
import ChildComment from "./ChildComment";

interface ParentCommentProps {
  comment: CommentInterface;
  getReplies: (id: string) => CommentInterface[];
}

const ParentComment: React.FC<ParentCommentProps> = ({
  comment,
  getReplies,
}) => {
  // create formated date from timestamp
  const dateCreated = new Date(comment.timestamp).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const dayCreated = new Date(comment.timestamp).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <section className="flex flex-col space-y-4">
      <time className="self-center text-secondary-700 text-sm">
        {dayCreated}, {dateCreated}.
      </time>
      <ChildComment getReplies={getReplies} comment={comment} />
    </section>
  );
};

export default ParentComment;
