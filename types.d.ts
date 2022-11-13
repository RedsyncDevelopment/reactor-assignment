export interface AuthorInterface {
  name: string;
  picture: string;
}

export interface CommentInterface {
  id: string;
  parent_id?: string;
  author: AuthorInterface;
  text: string;
  timestamp: number;
}

export interface CommentMapInterface {
  [key: string]: CommentInterface[];
}
