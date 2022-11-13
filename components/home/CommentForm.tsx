import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import { CommentsContext } from "../../src/store";
import { CommentInterface } from "../../types";
import Button from "../UI/Button";
import Input from "../UI/Input";

interface CommentFormProps {
  commentId: string;
  parentId?: string;
  onComment?: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({
  commentId,
  parentId,
  onComment,
}) => {
  const { comments, setComments } = useContext(CommentsContext);
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: CommentInterface = {
      author: {
        name: "John Doe",
        picture: "/img/john.jpg",
      },
      text: text,
      timestamp: Date.now(),
      id: commentId,
      parent_id: parentId,
    };
    setText("");
    setComments([...comments, newComment]);
    onComment && onComment();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-2 border-[1px] border-secondary-400 flex items-center justify-between"
      id="comment-form"
    >
      <Button type="button">
        <AiOutlinePlus className="w-6 h-6" />
      </Button>
      <Input
        placeholder="Start typing your comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="comment-input"
      />
      <Button id="submit-button" type="submit">
        <TbSend className="w-6 h-6" />
        <span>Send message</span>
      </Button>
    </form>
  );
};

export default CommentForm;
