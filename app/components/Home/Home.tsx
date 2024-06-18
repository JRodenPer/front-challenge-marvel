"use client";

import * as S from "./Home.styles";
import CharacterList from "../CharacterList";
import Topbar from "../Topbar";
import { Character } from "../CharacterList/CharacterList.types";
import { HomeProps } from "./Home.types";
import { useQuery } from "react-query";
import LoadingBar from "../LoadingBar";
import { ChangeEvent, useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { fetchCharacters } from "@/app/utils/fetchCharacters";
import { useLikes } from "@/app/contexts/LikesContext";

const Home: React.FC = () => {
  const [filterCharacters, setFilterCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [resultText, setResultText] = useState<string>("");
  const { idCharacters, likeView } = useLikes();
  const {
    data: characters,
    isLoading: charactersLoading,
    isError: charactersError,
  } = useQuery(["characters"], () => fetchCharacters(), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (characters) {
      const filtered = likeView
        ? characters
            .filter((character: Character) =>
              idCharacters.includes(character.id),
            )
            .filter((characterLike: Character) =>
              characterLike.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()),
            )
        : characters.filter((character: Character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase()),
          );
      setFilterCharacters(filtered);
      const items = filtered.length;
      const text = items === 1 ? " RESULT" : " RESULTS";
      setResultText(items.toString() + text);
    }
  }, [searchTerm, characters, idCharacters, likeView]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <S.MainContainer>
      {charactersLoading && <LoadingBar isLoading={!charactersLoading} />}
      {characters && (
        <S.BodyContainer>
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
          <S.CustomText>{resultText}</S.CustomText>
          <CharacterList characters={filterCharacters} />
        </S.BodyContainer>
      )}
    </S.MainContainer>
  );
};

export default Home;
