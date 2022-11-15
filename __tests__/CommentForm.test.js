import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentForm from "../components/home/CommentForm";

describe("<CommentForm />", () => {
  test("should create new comment on button click", async () => {
    const newComment = {
      author: {
        name: "John Doe",
        picture: "/img/john.jpg",
      },
      text: "New comment",
      timestamp: Date.now(),
      id: "1",
    };

    const onAddNewCommentMock = jest.fn();
    const userAction = userEvent.setup();

    const result = render(
      <CommentForm commentId={newComment.id} onComment={onAddNewCommentMock} />
    );

    const submitButton = result.container.querySelector("#submit-button");
    expect(submitButton).toBeDefined();

    await userAction.click(submitButton);

    expect(onAddNewCommentMock.mock.calls).toHaveLength(1);
  });
});
