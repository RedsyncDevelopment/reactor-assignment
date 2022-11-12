import React, { useMemo } from "react";
import { CommentInterface } from "../../types";
import ParentComment from "./ParentComment";

interface CommentsProps {
  comments: CommentInterface[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  // console.log(comments);

  // create comments Map with nested comments
  const commentsMap = useMemo(() => {
    const map: any = {};
    if (!comments) return [];
    comments.forEach((comment) => {
      // if comment has parent_id -> create new array if it doesn't already exist, if exists -> push that comment to array
      if (comment.parent_id) {
        // create empty array if there isn't already one
        map[comment.parent_id] ||= [];
        // push comment to array
        map[comment.parent_id].push(comment);
      }
    });
    return map;
  }, [comments]);

  const getReplies = (parentId: string): CommentInterface[] => {
    return commentsMap[parentId];
  };

  return (
    <div className="flex flex-col space-y-6">
      {comments?.map(
        (comment) =>
          !comment.parent_id && (
            <ParentComment
              key={comment.id}
              comment={comment}
              getReplies={getReplies}
            />
          )
      )}
    </div>
  );
};

export default Comments;
