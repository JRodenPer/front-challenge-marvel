import React from "react";
import * as S from "./ComicCard.styles";
import { ComicCardProps } from "./ComicCard.types";

const ComicCard: React.FC<ComicCardProps> = ({ imageUrl, title, date }) => {
  return (
    <S.CardContainer>
      <S.CardImage src={imageUrl} alt={title} />
      <S.CardBody>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardText>{date}</S.CardText>
      </S.CardBody>
    </S.CardContainer>
  );
};

export default ComicCard;
