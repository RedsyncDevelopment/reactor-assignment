import React from "react";

interface ChildSeparatorProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const ChildSeparator: React.FC<ChildSeparatorProps> = ({ ...props }) => {
  return (
    <div className="absolute left-6 w-6 h-10 border-l-2 border-b-2 border-secondary-400 rounded-bl-md" />
  );
};

export default ChildSeparator;
