import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import styled from "styled-components";
import Button from "../UI/Button";
import Input from "../UI/Input";

interface CommentFormProps {}

const CommentForm: React.FC<CommentFormProps> = ({}) => {
  return (
    <div className="bg-white rounded-lg p-2 border-[1px] border-secondary-400 flex items-center justify-between">
      <div className="flex space-x-4 h-full">
        <Button>
          <AiOutlinePlus className="w-6 h-6" />
        </Button>
        <Input placeholder="Start typing your comment..." />
      </div>
      <Button>
        <TbSend className="w-6 h-6" />
        <span>Send message</span>
      </Button>
    </div>
  );
};

export default CommentForm;
