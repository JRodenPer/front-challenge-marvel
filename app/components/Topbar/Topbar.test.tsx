import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Topbar from "./Topbar";
import { TopbarProps } from "./Topbar.types";

const setup = (props: Partial<TopbarProps> = {}) => {
  const defaultProps: TopbarProps = {
    likes: 0,
    onLogoClick: jest.fn(),
    onLikeClick: jest.fn(),
  };

  return render(<Topbar {...defaultProps} {...props} />);
};

describe("Topbar", () => {
  test("renders Topbar with correct elements", () => {
    setup({ likes: 5 });

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByTestId("likes-container")).toBeInTheDocument();
  });

  test("calls onLogoClick when logo is clicked", () => {
    const onLogoClick = jest.fn();
    setup({ onLogoClick });

    fireEvent.click(screen.getByAltText("Logo"));
    expect(onLogoClick).toHaveBeenCalledTimes(1);
  });

  test("calls onLikeClick when likes container is clicked", () => {
    const onLikeClick = jest.fn();
    setup({ onLikeClick });

    fireEvent.click(screen.getByTestId("likes-container"));
    expect(onLikeClick).toHaveBeenCalledTimes(1);
  });

  test("displays the correct number of likes", () => {
    setup({ likes: 10 });

    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
