import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

interface CommentsSectionProps {}

const CommentsSection: React.FC<CommentsSectionProps> = ({}) => {
  return (
    <div className="w-3/4 h-3/4 bg-secondary-200 md:w-3/5 xl:w-1/2 rounded-lg py-8 pl-8 pr-4 flex flex-col">
      <div className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#C7CDD8] scrollbar-thumb-rounded-full">
        <div className="pr-4">
          <Comments />
        </div>
      </div>
      <div className="pr-4">
        <CommentForm />
      </div>
    </div>
  );
};

export default CommentsSection;
