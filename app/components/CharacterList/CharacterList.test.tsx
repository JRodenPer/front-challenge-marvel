import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterList from "./CharacterList";
import { Character } from "./CharacterList.types";

jest.mock("../CharacterCard", () => ({ imageUrl, name, id }: any) => (
  <div data-testid="character-card">
    <img src={imageUrl} alt={name} />
    <p>{name}</p>
    <p>{id}</p>
  </div>
));

describe("CharacterList", () => {
  const characters: Character[] = [
    {
      id: "1",
      name: "Iron Man",
      thumbnail: { path: "https://image1", extension: "jpg" },
      description: "",
    },
    {
      id: "2",
      name: "Spiderman",
      thumbnail: { path: "https://image2", extension: "jpg" },
      description: "",
    },
  ];

  it("should render the correct number of CharacterCard components", () => {
    render(<CharacterList characters={characters} />);
    const characterCards = screen.getAllByTestId("character-card");
    expect(characterCards).toHaveLength(characters.length);
  });

  it("should render CharacterCard components with the correct props", () => {
    render(<CharacterList characters={characters} />);

    characters.forEach((character) => {
      const imageElement = screen.getByAltText(character.name);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute(
        "src",
        `${character.thumbnail.path}.${character.thumbnail.extension}`
      );

      const nameElement = screen.getByText(character.name);
      expect(nameElement).toBeInTheDocument();

      const idElement = screen.getByText(character.id);
      expect(idElement).toBeInTheDocument();
    });
  });

  it("should generate correct links for each character", () => {
    render(<CharacterList characters={characters} />);

    characters.forEach((character) => {
      const linkElement = screen.getByRole("link", {
        name: new RegExp(character.name, "i"),
      });
      expect(linkElement).toHaveAttribute("href", `/character/${character.id}`);
    });
  });
});
