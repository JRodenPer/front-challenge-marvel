"use client";

import React from "react";
import * as S from "./Topbar.styles";
import { TopbarProps } from "./Topbar.types";
import Heart from "@/public/icons/heart.svg";

const Topbar: React.FC<TopbarProps> = ({ likes = 0 }) => {
  return (
    <S.TopbarContainer>
      <S.LogoImage src="/icons/marvelLogo.svg" alt="Logo" />
      <S.LikesContainer>
        <Heart />
        <S.CustomText>{likes}</S.CustomText>
      </S.LikesContainer>
    </S.TopbarContainer>
  );
};

export default Topbar;
