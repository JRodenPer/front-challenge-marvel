import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeartButton from "../HeartButton";
import { useLikes } from "@/app/contexts/LikesContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 188.5px;
  min-width: 172.5px;
`;

const Image = styled.img`
  width: 100%;
  height: 190px;
  display: block;
  object-fit: cover;
`;

const Content = styled.section`
  display: flex;
  position: relative;
  background: #fff;
  border-top: 5.38px solid red;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.5s ease;
  flex: 1;
  background-color: red;

  padding: 16px 16px 24px;
  gap: 24px;

  isolation: isolate;

  &:hover {
    background-color: red;

    &::before {
      top: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: black;
    transition: top 0.5s ease;
  }
`;

const Name = styled.div`
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Decoration = styled.div`
  position: absolute;
  background: white;
  z-index: 2;

  width: 18px;
  height: 18px;
  right: -9px;
  bottom: -9px;
  transform: rotate(45deg);
`;

interface CharacterCardProps {
  imageUrl: string;
  name: string;
  id: string;
}

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
    <Container>
      <Image src={imageUrl} alt={name} />
      <Content onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Name>{name}</Name>
        <HeartButton
          isHover={isHoverInfo}
          isLike={isLike}
          onClick={handleClick}
        />
        <Decoration />
      </Content>
    </Container>
  );
};

export default CharacterCard;
