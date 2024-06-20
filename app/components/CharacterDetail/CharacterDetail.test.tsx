import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterDetail from "./CharacterDetail";
import { LikesContext, LikesContextType } from "@/app/contexts/LikesContext";

jest.mock("../HeartButton", () => ({ isHover, isLike, size, onClick }: any) => (
  <button onClick={onClick} data-testid="heart-button">
    {isLike ? "Liked" : "Not Liked"}
  </button>
));

const mockUseLikes: LikesContextType = {
  idCharacters: [],
  likeView: false,
  addId: jest.fn(),
  removeId: jest.fn(),
  activeLikeView: jest.fn(),
  activeFullView: jest.fn(),
};

const renderWithContext = (component: React.ReactNode) => {
  return render(
    <LikesContext.Provider value={mockUseLikes}>
      {component}
    </LikesContext.Provider>
  );
};

describe("CharacterDetail", () => {
  const characterProps = {
    name: "Iron Man",
    description: "Rich.",
    imageUrl: "https://via.placeholder.com/150",
    id: "1",
  };

  it("should render character details", () => {
    renderWithContext(<CharacterDetail {...characterProps} />);
    const nameElement = screen.getByText("Iron Man");
    const descriptionElement = screen.getByText("Rich.");
    const imageElement = screen.getByAltText("Iron Man");

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://via.placeholder.com/150"
    );
  });

  it("should toggle like state on heart button click", () => {
    renderWithContext(<CharacterDetail {...characterProps} />);
    const heartButton = screen.getByTestId("heart-button");

    fireEvent.click(heartButton);
    expect(mockUseLikes.addId).toHaveBeenCalledWith("1");

    mockUseLikes.idCharacters.push("1");
    renderWithContext(<CharacterDetail {...characterProps} />);
    fireEvent.click(heartButton);
    expect(mockUseLikes.removeId).toHaveBeenCalledWith("1");
  });
});
