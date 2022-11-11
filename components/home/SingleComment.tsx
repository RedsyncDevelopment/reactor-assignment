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
  const time = new Date(comment.timestamp).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // StackOvewflow <3
  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(urlRegex);

  // create new text array
  const text = comment.text.split(regex);
  console.log(text);
  const childComments = getReplies(comment.id);

  return (
    <div className="flex flex-col">
      <div className="flex space-x-4 pt-4">
        <Image
          src={comment.author.picture}
          alt={`Picture of ${comment.author.name}`}
          width={48}
          height={48}
          className="rounded-full w-12 h-12 border-[1px] border-white"
        />
        <div className="flex flex-col space-y-2">
          <div className="bg-white rounded-lg p-6 flex flex-col space-y-2  border-[1px] border-secondary-400">
            <p className="text-secondary-900 font-semibold">
              {comment.author.name}
            </p>
            <p className="text-secondary-700">
              {text.map((line, i) =>
                line.match(regex) ? (
                  <a className="text-primary-400 underline" href={line}>
                    {line}
                  </a>
                ) : (
                  <p>{line}</p>
                )
              )}
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="text-secondary-700">{time}</div>
            <BsDot className="text-secondary-700" />
            <div className="text-primary-400">
              Reply {childComments && <span>({childComments.length})</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="pl-16">
        {childComments && (
          <div className="absolute left-6 w-6 h-10 border-l-2 border-b-2 border-secondary-400 rounded-bl-md" />
        )}
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
