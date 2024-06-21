"use client";

import * as S from "./CharacterList.styles";
import { Character } from "./CharacterList.types";
import CharacterCard from "../CharacterCard";

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <S.List>
      {characters.map((character) => (
        <S.ListItem key={character.id}>
          <S.StyledLink href={`/character/${character.id}`}>
            <CharacterCard
              imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              name={character.name}
              id={character.id}
            />
          </S.StyledLink>
        </S.ListItem>
      ))}
    </S.List>
  );
}
