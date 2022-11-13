import React from "react";

interface CommentSeparatorProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const CommentSeparator: React.FC<CommentSeparatorProps> = ({ ...props }) => {
  return (
    <div
      {...props}
      className="absolute left-6 w-6 h-12 border-l-2 border-b-2 border-secondary-400 rounded-bl-md"
    />
  );
};

export default CommentSeparator;
