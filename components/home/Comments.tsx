import React, { useMemo, useState } from "react";
import { CommentInterface } from "../../types";
import { COMMENTS } from "../../utils/constants";
import SingleComment from "./SingleComment";

interface CommentsProps {}

const Comments: React.FC<CommentsProps> = ({}) => {
  const [comments, setComments] = useState<CommentInterface[]>(COMMENTS);

  // create comments Map with nested children comments
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

  const getReplies = (parentId: string): [] => {
    return commentsMap[parentId];
  };

  return (
    <div>
      {comments.map((comment) => {
        if (!comment.parent_id) {
          return (
            <SingleComment
              getReplies={getReplies}
              key={comment.id}
              comment={comment}
            />
          );
        }
      })}
    </div>
  );
};

export default Comments;
