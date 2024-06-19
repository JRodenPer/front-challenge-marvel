"use client";

import CharacterList from "../CharacterList";
import Topbar from "../Topbar";
import { Character } from "../CharacterList/CharacterList.types";
import { useQuery } from "react-query";
import LoadingBar from "../LoadingBar";
import { ChangeEvent, useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { fetchCharacters } from "@/app/utils/fetchCharacters";
import { useLikes } from "@/app/contexts/LikesContext";
import { Main } from "next/document";
import { redirect, useRouter } from "next/navigation";

const MainTopbar: React.FC = () => {
  const { push } = useRouter();
  const { idCharacters, activeLikeView, activeFullView } = useLikes();
  const [numLikes, setNumLikes] = useState(0);
  const [goMain, setGoMain] = useState(false);

  useEffect(() => {
    setNumLikes(idCharacters.length);
  }, [idCharacters]);

  useEffect(() => {
    if (goMain) {
      push("/");
      setGoMain(false);
    }
  }, [goMain]);

  const handleLikeClick = () => {
    activeLikeView();
    setGoMain(true);
  };

  const handleLogoClick = () => {
    activeFullView();
    setGoMain(true);
  };

  return (
    <Topbar
      likes={numLikes}
      onLogoClick={handleLogoClick}
      onLikeClick={handleLikeClick}
    />
  );
};

export default MainTopbar;
