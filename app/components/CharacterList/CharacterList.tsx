"use client";

import Link from "next/link";
import styled from "styled-components";
import { Character } from "./CharacterList.types";
import CharacterCard from "../CharacterCard";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(172.5px, 1fr));
  list-style: none;
  gap: 16px;
  padding: 0;
`;

const ListItem = styled.li`
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <List>
      {characters.map((character) => (
        <ListItem key={character.id}>
          <StyledLink href={`/character/${character.id}`}>
            <CharacterCard
              imageUrl={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              name={character.name}
              id={character.id}
            />
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
}
