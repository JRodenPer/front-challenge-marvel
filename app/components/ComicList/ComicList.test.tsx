import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ComicList from "./ComicList";

describe("ComicList", () => {
  const defaultProps = {
    children: <div>Comic Item</div>,
  };

  test("renders without crashing", () => {
    const { container } = render(<ComicList {...defaultProps} />);
    expect(container).toBeInTheDocument();
  });

  test("displays the correct title", () => {
    const { getByText } = render(<ComicList {...defaultProps} />);
    expect(getByText("COMICS")).toBeInTheDocument();
  });

  test("renders children correctly", () => {
    const { getByText } = render(<ComicList {...defaultProps} />);
    expect(getByText("Comic Item")).toBeInTheDocument();
  });

  test("handles mouse events", () => {
    const { getByText } = render(<ComicList {...defaultProps} />);
    const listContainer = getByText("Comic Item").parentElement as HTMLElement;

    expect(listContainer.scrollLeft).toBe(0);

    fireEvent.mouseDown(listContainer, { pageX: 100 });
    fireEvent.mouseMove(listContainer, { pageX: 150 });
    fireEvent.mouseUp(listContainer);

    expect(listContainer.scrollLeft).not.toBe(0);
  });

  test("handles touch events", () => {
    const { getByText } = render(<ComicList {...defaultProps} />);
    const listContainer = getByText("Comic Item").parentElement as HTMLElement;

    fireEvent.touchStart(listContainer, { touches: [{ pageX: 100 }] });
    fireEvent.touchMove(listContainer, { touches: [{ pageX: 150 }] });
    fireEvent.touchEnd(listContainer);

    expect(listContainer.scrollLeft).not.toBe(0);
  });
});
