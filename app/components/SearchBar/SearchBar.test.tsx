import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  it("renders SearchBar correctly", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <SearchBar value="" onChange={() => {}} />
    );

    const inputElement = getByPlaceholderText("SEARCH A CHARACTER...");
    const searchBarContainer = getByTestId("search-bar-container");

    expect(inputElement).toBeInTheDocument();
    expect(searchBarContainer).toBeInTheDocument();
  });

  it("updates input value correctly", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar value="" onChange={onChangeMock} />
    );

    const inputElement = getByPlaceholderText(
      "SEARCH A CHARACTER..."
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "Iron Man" } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
