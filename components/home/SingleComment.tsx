import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { CommentInterface } from "../../types";

interface SingleCommentProps {
  comment: CommentInterface;
  getReplies: (id: string) => [];
}

const SingleComment: React.FC<SingleCommentProps> = ({
  comment,
  getReplies,
}) => {
  const childComments = getReplies(comment.id);
  return (
    <div className="flex flex-col">
      <div className="flex space-x-2 pt-4">
        <Image
          src={comment.author.picture}
          alt={`Picture of ${comment.author.name}`}
          width={48}
          height={48}
          className="rounded-full w-12 h-12 border-[1px] border-white"
        />
        <div className="flex flex-col space-y-2">
          <div className="bg-white rounded-lg p-6 flex flex-col space-y-2">
            <p className="text-secondary-900 font-semibold">
              {comment.author.name}
            </p>
            <p className="text-secondary-700">{comment.text}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="text-secondary-700">{comment.timestamp}</div>
            <BsDot className="text-secondary-700" />
            <div className="text-primary-400">Reply</div>
          </div>
        </div>
      </div>
      <div className="pl-16">
        {childComments &&
          childComments.length > 0 &&
          childComments.map((comment: any) => (
            <SingleComment
              getReplies={getReplies}
              key={comment.id}
              comment={comment}
            />
          ))}
      </div>
    </div>
  );
};

export default SingleComment;
