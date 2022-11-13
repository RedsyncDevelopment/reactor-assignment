import React from "react";
import { CommentInterface } from "../../types";
import { getFormatedDate } from "../../utils/helpers";
import CommentLayout from "../UI/CommentLayout";
import CommentSeparator from "../UI/CommentSeparator";

interface CommentProps {
  comment: CommentInterface;
  getReplies: (id: string) => CommentInterface[];
}

const Comment: React.FC<CommentProps> = ({ comment, getReplies }) => {
  // create formated date from timestamp
  const dateToDispaly = getFormatedDate(comment.timestamp);
  // find childComments
  const childComments = getReplies(comment.id);

  return (
    <section className="flex flex-col relative">
      {!comment.parent_id && (
        <time className="pt-8 self-center text-secondary-700 text-sm">
          {dateToDispaly}
        </time>
      )}
      <CommentLayout comment={comment} childComments={childComments} />

      {/* render childComments if there are any */}
      {childComments && (
        <div className="pl-16">
          {/* add replies sepparator to first child comment */}
          <CommentSeparator />
          {childComments.map((comment) => (
            <Comment
              getReplies={getReplies}
              key={comment.id}
              comment={comment}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Comment;
