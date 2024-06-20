import React, { useEffect, useState } from "react";
import * as S from "./CharacterCard.styles";
import HeartButton from "../HeartButton";
import { useLikes } from "@/app/contexts/LikesContext";
import { CharacterCardProps } from "./CharacterCard.types";

const CharacterCard: React.FC<CharacterCardProps> = ({
  imageUrl,
  name,
  id,
}) => {
  const [isHoverInfo, setIsHoverInfo] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const { idCharacters, addId, removeId } = useLikes();

  useEffect(() => {
    const isIncluded = idCharacters.includes(id);
    setIsLike(isIncluded);
  }, [idCharacters]);
  const handleMouseEnter = () => {
    setIsHoverInfo(true);
  };
  const handleMouseLeave = () => {
    setIsHoverInfo(false);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const isIncluded = idCharacters.includes(id);
    isIncluded ? removeId(id) : addId(id);
  };
  return (
    <S.Container>
      <S.Image src={imageUrl} alt={name} />
      <S.Content
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <S.Name>{name}</S.Name>
        <HeartButton
          isHover={isHoverInfo}
          isLike={isLike}
          onClick={handleClick}
        />
        <S.Decoration />
      </S.Content>
    </S.Container>
  );
};

export default CharacterCard;
