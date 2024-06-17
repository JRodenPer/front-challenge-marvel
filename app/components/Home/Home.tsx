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

const Home: React.FC = () => {
  const [filterCharacters, setFilterCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [resultText, setResultText] = useState<string>("");
  const {
    data: characters,
    isLoading: charactersLoading,
    isError: charactersError,
  } = useQuery(["characters"], () => fetchCharacters(), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (characters) {
      const filtered = characters.filter((character: Character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterCharacters(filtered);
      const items = filtered.length;
      console.log(items);
      const text = items === 1 ? " RESULT" : " RESULTS";
      setResultText(items.toString() + text);
    }
  }, [searchTerm, characters]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <S.MainContainer>
      <Topbar likes={0} />
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
