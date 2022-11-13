import { render, screen } from "@testing-library/react";
import Comment from "../Comment";

describe("<Comment />", () => {
  let comment, getReplies;
  beforeEach(() => {
    comment = {
      id: "2",
      author: { name: "Zmaj Sipovski", picture: "/img/zmaj.jpg" },
      text: "Hey Ivana! Have you tried Googling that?",
      timestamp: 414514860000,
    };
    getReplies = (parentId) => {
      return comment[parentId];
    };
  });
  test("should render author and text", () => {
    render(<Comment comment={comment} getReplies={getReplies} />);
    const name = screen.getByText("Zmaj Sipovski");
    const text = screen.getByText("Hey Ivana! Have you tried Googling that?");
    expect(name).toBeDefined();
    expect(text).toBeDefined();
  });

  test("should render time as en-US locale", () => {
    render(<Comment comment={comment} getReplies={getReplies} />);
    const time = screen.getByText("04:01 PM");
    expect(time).toBeDefined();
  });

  describe("if there is NO parent comment", () => {
    test("should render date in specific format", () => {
      render(<Comment comment={comment} getReplies={getReplies} />);
      const dateCreated = screen.getByText("Saturday, 19.02.1983.");
      expect(dateCreated).toBeDefined();
    });
  });

  describe("if there IS parent comment", () => {
    test("should NOT render date", () => {
      comment.parent_id = "1";
      const result = render(
        <Comment comment={comment} getReplies={getReplies} />
      );
      const dateCreated = result.container.querySelector("#date-created");
      expect(dateCreated).toBeNull();
    });
  });
});
