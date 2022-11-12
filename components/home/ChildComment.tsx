import React from "react";
import { CommentInterface } from "../../types";
import ChildSeparator from "../UI/ChildSeparator";
import CommentLayout from "./CommentLayout";

interface ChildCommentProps {
  comment: CommentInterface;
  getReplies: (id: string) => CommentInterface[];
}

const ChildComment: React.FC<ChildCommentProps> = ({ comment, getReplies }) => {
  // find child comments
  const childComments = getReplies(comment.id);

  return (
    <section className="flex flex-col relative">
      <CommentLayout comment={comment} childComments={childComments} />
      <div className="pl-16">
        {/* add replies sepparator to first child comment */}
        {childComments && <ChildSeparator />}
        {/* add child comments recursively if they exist */}
        {childComments &&
          childComments.map((comment) => (
            <ChildComment
              getReplies={getReplies}
              key={comment.id}
              comment={comment}
            />
          ))}
      </div>
    </section>
  );
};

export default ChildComment;
