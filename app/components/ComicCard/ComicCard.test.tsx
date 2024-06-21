import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ComicCard from "./ComicCard";

describe("ComicCard", () => {
  const defaultProps = {
    imageUrl: "https://via.placeholder.com/150",
    title: "Comic Title",
    date: "2024-06-20",
  };

  test("renders the component", () => {
    const { container } = render(<ComicCard {...defaultProps} />);
    expect(container).toBeInTheDocument();
  });

  test("displays the correct image", () => {
    const { getByAltText } = render(<ComicCard {...defaultProps} />);
    const img = getByAltText(defaultProps.title);
    expect(img).toHaveAttribute("src", defaultProps.imageUrl);
  });

  test("displays the correct title", () => {
    const { getByText } = render(<ComicCard {...defaultProps} />);
    expect(getByText(defaultProps.title)).toBeInTheDocument();
  });

  test("displays the correct date", () => {
    const { getByText } = render(<ComicCard {...defaultProps} />);
    expect(getByText(defaultProps.date)).toBeInTheDocument();
  });
});
