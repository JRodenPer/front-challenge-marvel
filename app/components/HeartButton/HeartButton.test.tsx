import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeartButton from "./HeartButton";
import { ButtonSize } from "./HeartButton.types";

describe("HeartButton", () => {
  test("renders the component", () => {
    const { container } = render(
      <HeartButton isLike={true} isHover={false} onClick={() => {}} />
    );
    expect(container).toBeInTheDocument();
  });

  test("renders small heart when isLike and size is SMALL", () => {
    const { getByTestId } = render(
      <HeartButton
        isLike={true}
        isHover={false}
        size={ButtonSize.SMALL}
        onClick={() => {}}
      />
    );
    const smallHeart = getByTestId("icon-heart-min");
    expect(smallHeart).toBeInTheDocument();
  });

  test("renders big heart when isLike and size is BIG", () => {
    const { getByTestId } = render(
      <HeartButton
        isLike={true}
        isHover={false}
        size={ButtonSize.BIG}
        onClick={() => {}}
      />
    );
    const bigHeart = getByTestId("icon-heart");
    expect(bigHeart).toBeInTheDocument();
  });

  test("renders small heart border when not isLike and size is SMALL", () => {
    const { getByTestId } = render(
      <HeartButton
        isLike={false}
        isHover={false}
        size={ButtonSize.SMALL}
        onClick={() => {}}
      />
    );
    const smallHeartBorder = getByTestId("icon-heart-border-min");
    expect(smallHeartBorder).toBeInTheDocument();
  });

  test("renders big heart border when not isLike and size is BIG", () => {
    const { getByTestId } = render(
      <HeartButton
        isLike={false}
        isHover={false}
        size={ButtonSize.BIG}
        onClick={() => {}}
      />
    );
    const bigHeartBorder = getByTestId("icon-heart-border");
    expect(bigHeartBorder).toBeInTheDocument();
  });
});
