"use client";

import React from "react";
import * as S from "./Topbar.styles";
import { TopbarProps } from "./Topbar.types";
import Heart from "@/public/icons/heart.svg";

const Topbar: React.FC<TopbarProps> = ({
  likes = 0,
  onLogoClick,
  onLikeClick,
}) => {
  return (
    <S.TopbarContainer>
      <S.LogoImage
        onClick={onLogoClick}
        src="/icons/marvelLogo.svg"
        alt="Logo"
      />
      <S.LikesContainer onClick={onLikeClick} data-testid="likes-container">
        <Heart fill="red" />
        <p>{likes}</p>
      </S.LikesContainer>
    </S.TopbarContainer>
  );
};

export default Topbar;
