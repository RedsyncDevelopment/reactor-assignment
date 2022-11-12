import { createContext, Dispatch, SetStateAction, useState } from "react";

import { ReactNode } from "react";
import { CommentInterface } from "../types";

interface CommentsProviderInterface {
  children: ReactNode;
}

interface CommentsContextInterface {
  comments: CommentInterface[];
  setComments: Dispatch<SetStateAction<CommentInterface[]>>;
}

const defaultState = {
  comments: [],
  setComments: () => {},
};

export const CommentsContext =
  createContext<CommentsContextInterface>(defaultState);

export const CommentsProvider: React.FC<CommentsProviderInterface> = ({
  children,
}) => {
  const [comments, setComments] = useState<CommentInterface[]>([]);

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentsContext.Provider>
  );
};
