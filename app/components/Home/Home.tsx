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
  const { idCharacters } = useLikes();
  const [numLikes, setNumLikes] = useState(0);
  const [isLikesFiltered, setIsLikesFiltered] = useState(false);
  const {
    data: characters,
    isLoading: charactersLoading,
    isError: charactersError,
  } = useQuery(["characters"], () => fetchCharacters(), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setNumLikes(idCharacters.length);
  }, [idCharacters]);

  useEffect(() => {
    console.log(isLikesFiltered);
    if (characters) {
      const filtered = isLikesFiltered
        ? characters.filter((character: Character) =>
            idCharacters.includes(character.id)
          )
        : characters.filter((character: Character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
      setFilterCharacters(filtered);
      const items = filtered.length;
      const text = items === 1 ? " RESULT" : " RESULTS";
      setResultText(items.toString() + text);
    }
  }, [searchTerm, characters, idCharacters, isLikesFiltered]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleLikeClick = () => {
    setIsLikesFiltered(true);
  };

  const handleLogoClick = () => {
    setIsLikesFiltered(false);
  };

  return (
    <S.MainContainer>
      <Topbar
        likes={numLikes}
        onLogoClick={handleLogoClick}
        onLikeClick={handleLikeClick}
      />
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
