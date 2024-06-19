import React from "react";
import styled from "styled-components";

interface ComicCardProps {
  imageUrl: string;
  title: string;
  date: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  min-width: 179.2px;
  height: auto;
  gap: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardTitle = styled.p`
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  margin: 0 0 8px;

  white-space: normal;

  font-size: 16px;
  line-height: 19px;
  font-weight: 500;

  display: flex;
  align-items: center;
  align-self: stretch;
`;

const CardText = styled.p`
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
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
