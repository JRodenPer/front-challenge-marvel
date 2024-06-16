"use client";

import Link from "next/link";
import styled from "styled-components";
import { Character } from "./CharacterList.types";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
`;

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <List>
      {characters.map((character) => (
        <ListItem key={character.id}>
          <Link href={`/character/${character.id}`}>{character.name}</Link>
        </ListItem>
      ))}
    </List>
  );
}
