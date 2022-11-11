import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

interface CommentsSectionProps {}

const CommentsSection: React.FC<CommentsSectionProps> = ({}) => {
  return (
    <div className="comments-section">
      <div className="comments-section-scrollbar">
        <div className="pr-2 pb-8 md:pr-4">
          <Comments />
        </div>
      </div>
      <div className="pr-2 md:pr-4">
        <CommentForm />
      </div>
    </div>
  );
};

export default CommentsSection;
