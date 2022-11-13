import React, { useMemo } from "react";
import { CommentInterface, CommentMapInterface } from "../../types";
import Comment from "./Comment";

interface CommentsProps {
  comments: CommentInterface[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  // create comments Map with nested comments
  const commentsMap = useMemo(() => {
    const map: CommentMapInterface = {};
    if (!comments) return {};
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
    <div className="flex flex-col">
      {comments
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(
          (comment) =>
            // render top comments (comments without parent id)
            !comment.parent_id && (
              <Comment
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
