// Home.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Home";
import { fetchCharacters } from "@/app/utils/fetchCharacters";
import { Character } from "../CharacterList/CharacterList.types";

jest.mock("../../utils/fetchCharacters");
const mockedFetchCharacters = fetchCharacters as jest.MockedFunction<
  typeof fetchCharacters
>;

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
};

const name1 = "Iron Man";
const name2 = "Spiderman";
const placeHolderText = "SEARCH A CHARACTER...";

const mockCharacters: Character[] = [
  {
    id: "1",
    name: name1,
    thumbnail: {
      path: "",
      extension: "jpg",
    },
  },
  {
    id: "2",
    name: name2,
    thumbnail: {
      path: "",
      extension: "jpg",
    },
  },
];

describe("Home Component", () => {
  beforeEach(() => {
    mockedFetchCharacters.mockResolvedValue(mockCharacters);
  });

  afterEach(() => {
    queryClient.clear();
  });

  it("should render the component and display the initial characters", async () => {
    renderWithClient(<Home />);

    await waitFor(() => expect(screen.getByText(name1)).toBeInTheDocument());
    expect(screen.getByText(name2)).toBeInTheDocument();
    expect(screen.getByText("2 RESULTS")).toBeInTheDocument();
  });

  it("should filter characters based on search input", async () => {
    renderWithClient(<Home />);

    await waitFor(() => expect(screen.getByText(name1)).toBeInTheDocument());
    expect(screen.getByText(name2)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(placeHolderText), {
      target: { value: "Iron" },
    });

    expect(screen.getByText(name1)).toBeInTheDocument();
    expect(screen.queryByText(name2)).not.toBeInTheDocument();
    expect(screen.getByText("1 RESULT")).toBeInTheDocument();
  });

  it("should display no results if no characters match the search input", async () => {
    renderWithClient(<Home />);

    await waitFor(() => expect(screen.getByText(name1)).toBeInTheDocument());
    expect(screen.getByText(name2)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(placeHolderText), {
      target: { value: "Nonexistent" },
    });

    expect(screen.queryByText(name1)).not.toBeInTheDocument();
    expect(screen.queryByText(name2)).not.toBeInTheDocument();
    expect(screen.getByText("0 RESULTS")).toBeInTheDocument();
  });
});
