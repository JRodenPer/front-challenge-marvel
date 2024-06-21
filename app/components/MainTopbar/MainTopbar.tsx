"use client";

import Topbar from "../Topbar";
import { useEffect, useState } from "react";
import { useLikes } from "@/app/contexts/LikesContext";
import { useRouter } from "next/navigation";

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
