import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterCard from "./CharacterCard";
import { LikesContext, LikesContextType } from "@/app/contexts/LikesContext";

jest.mock("../HeartButton", () => ({ isHover, isLike, onClick }: any) => (
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

describe("CharacterCard", () => {
  const characterProps = {
    imageUrl: "https://via.placeholder.com/150",
    name: "Test Character",
    id: "1",
  };

  it("should render character image", () => {
    renderWithContext(<CharacterCard {...characterProps} />);
    const imageElement = screen.getByAltText("Test Character");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://via.placeholder.com/150"
    );
  });

  it("should render character name", () => {
    renderWithContext(<CharacterCard {...characterProps} />);
    const nameElement = screen.getByText("Test Character");
    expect(nameElement).toBeInTheDocument();
  });

  it("should toggle like state on heart button click", () => {
    renderWithContext(<CharacterCard {...characterProps} />);
    const heartButton = screen.getByTestId("heart-button");

    fireEvent.click(heartButton);
    expect(mockUseLikes.addId).toHaveBeenCalledWith("1");

    mockUseLikes.idCharacters.push("1");
    renderWithContext(<CharacterCard {...characterProps} />);
    fireEvent.click(heartButton);
    expect(mockUseLikes.removeId).toHaveBeenCalledWith("1");
  });
});
