import React from "react";
import { render } from "@testing-library/react";
import LoadingBar from "./LoadingBar";

describe("LoadingBar component", () => {
  it("renders correctly when isLoading is true", () => {
    const { getByTestId, container } = render(<LoadingBar isLoading={true} />);
    const barElement = getByTestId("loading-bar");

    expect(barElement).toHaveStyle("width: 1px");
  });

  it("renders correctly when isLoading is false", () => {
    const { getByTestId } = render(<LoadingBar isLoading={false} />);
    const barElement = getByTestId("loading-bar");

    expect(barElement).toHaveStyle("width: 100%");
  });
});
