import React, { useEffect, useState } from "react";
import * as S from "./CharacterDetail.styles";
import HeartButton from "../HeartButton";
import { useLikes } from "@/app/contexts/LikesContext";
import { CharacterDetailProps } from "./CharacterDetail.types";
import { ButtonSize } from "../HeartButton/HeartButton.types";

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  name,
  description,
  imageUrl,
  id,
}) => {
  const [isLike, setIsLike] = useState(false);
  const { idCharacters, addId, removeId } = useLikes();

  useEffect(() => {
    const isIncluded = idCharacters.includes(id);
    setIsLike(isIncluded);
  }, [idCharacters]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const isIncluded = idCharacters.includes(id);
    isIncluded ? removeId(id) : addId(id);
  };

  return (
    <S.MainContainer>
      <S.AnimationContainer>
        <S.Container>
          <S.Image src={imageUrl} alt={name} />
          <S.DetailsContainer>
            <S.TextContainer>
              <S.Title>
                {name}
                <HeartButton
                  isHover={false}
                  isLike={isLike}
                  size={ButtonSize.BIG}
                  onClick={handleClick}
                />
              </S.Title>
              <p>{description}</p>
            </S.TextContainer>
          </S.DetailsContainer>
        </S.Container>
        <S.Decoration />
      </S.AnimationContainer>
    </S.MainContainer>
  );
};

export default CharacterDetail;
