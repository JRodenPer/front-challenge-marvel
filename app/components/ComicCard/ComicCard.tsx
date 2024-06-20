import React from "react";
import styled from "styled-components";

interface ComicCardProps {
  imageUrl: string;
  title: string;
  date: string;
}

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  min-width: 179.2px;
  height: auto;
  gap: 10px;
  justify-content: space-between;

  align-items: flex-start;
`;

const CardImage = styled.img`
  width: 100%;
  height: 268.8px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 0;
`;

const CardTitle = styled.h3`
  white-space: normal;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  @media (min-width: 480.1px) and (max-width: 768px) {
    font-weight: 500;
    font-size: 15.047px;
    line-height: 18px;
  }
`;

const CardText = styled.p`
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  margin-top: var(--space-8);

  @media (max-width: 480px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
  @media (min-width: 480.1px) and (max-width: 768px) {
    font-weight: 400;
    font-size: 11.2852px;
    line-height: 13px;
  }
`;

const ComicCard: React.FC<ComicCardProps> = ({ imageUrl, title, date }) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{date}</CardText>
      </CardBody>
    </CardContainer>
  );
};

export default ComicCard;
