import React, { useMemo, useState } from "react";
import { CommentInterface } from "../../types";
import { COMMENTS } from "../../utils/constants";
import SingleComment from "./SingleComment";

interface CommentsProps {}

const Comments: React.FC<CommentsProps> = ({}) => {
  const [comments, setComments] = useState<CommentInterface[]>(COMMENTS);

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

  const getReplies = (parentId: string): [] => {
    return commentsMap[parentId];
  };

  return (
    <div className="flex flex-col space-y-6">
      {comments.map((comment) => {
        if (!comment.parent_id) {
          const date = new Date(comment.timestamp);
          return (
            <div key={comment.id} className="flex flex-col space-y-4 relative">
              <div className="self-center text-secondary-700 text-sm">
                <span>
                  {date.toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                  ,{" "}
                </span>
                <span>
                  {date.toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
              <SingleComment getReplies={getReplies} comment={comment} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Comments;
