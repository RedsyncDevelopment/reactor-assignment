import Image from "next/image";
import React, { useState } from "react";
import { CommentInterface } from "../../types";
import CommentForm from "../home/CommentForm";
import CommentBox from "./CommentBox";
import CommentInfo from "./CommentInfo";

interface CommentLayoutProps {
  comment: CommentInterface;
  childComments?: CommentInterface[];
}

const CommentLayout: React.FC<CommentLayoutProps> = ({
  comment,
  childComments,
}) => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <article>
      <div className="flex space-x-4 pt-8">
        <Image
          src={comment.author.picture}
          alt={`Picture of ${comment.author.name}`}
          width={48}
          height={48}
          className="rounded-full w-12 h-12 border-[1px] border-white"
        />
        <div className="flex flex-col space-y-2">
          <CommentBox comment={comment} />
          <CommentInfo
            comment={comment}
            numberOfReplies={childComments?.length}
            isFormOpen={isFormOpen}
            onFormOpen={() => setIsFormOpen((current) => !current)}
          />
        </div>
      </div>
      {isFormOpen && (
        <div className="pt-4 pl-16 w-[90%]">
          <CommentForm
            commentId={Math.floor(Math.random() * 100).toString()}
            parentId={comment.id}
            onComment={() => setIsFormOpen(false)}
          />
        </div>
      )}
    </article>
  );
};

export default CommentLayout;
