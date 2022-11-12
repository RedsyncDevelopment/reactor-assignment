import Image from "next/image";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { CommentInterface } from "../../types";
import CommentForm from "./CommentForm";

interface CommentLayoutProps {
  comment: CommentInterface;
  childComments: CommentInterface[];
}

const CommentLayout: React.FC<CommentLayoutProps> = ({
  comment,
  childComments,
}) => {
  const [openForm, setOpenForm] = useState<boolean>(false);

  const time = new Date(comment.timestamp).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // detect links - StackOvewflow <3
  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

  const commentText = comment.text.split(urlRegex).filter((i) => i);

  return (
    <article>
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
            <h1 className="text-secondary-900 font-semibold">
              {comment.author.name}
            </h1>
            {commentText.map((line, idx) =>
              line.match(urlRegex) ? (
                <a key={idx} className="text-primary-400 underline" href={line}>
                  {line}
                </a>
              ) : (
                <p key={idx} className="text-secondary-700">
                  {line}
                </p>
              )
            )}
          </div>
          <div className="flex space-x-2 items-center">
            <time className="text-secondary-700">{time}</time>
            <BsDot className="text-secondary-700 w-2 h-2" />
            <button
              onClick={() => setOpenForm((current) => !current)}
              className="text-primary-400"
            >
              {!openForm
                ? `Reply ${childComments ? `(${childComments.length})` : ""}`
                : "Close"}
            </button>
          </div>
        </div>
      </div>
      {openForm && (
        <div className="pt-4 pl-16 w-[90%]">
          <CommentForm
            commentId={Math.floor(Math.random() * 100).toString()}
            parentId={comment.id}
            onComment={() => setOpenForm(false)}
          />
        </div>
      )}
    </article>
  );
};

export default CommentLayout;
