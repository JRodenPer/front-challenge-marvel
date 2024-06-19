import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import HeartButton from "../HeartButton";
import { useLikes } from "@/app/contexts/LikesContext";

interface CharacterDetailProps {
  name: string;
  description: string;
  imageUrl: string;
  id: string;
}

const slideDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  border-top: 1px solid gray;
  animation: ${slideDown} 0.5s ease-out forwards;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 960px;
  height: 100%;
`;

const Image = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const Decoration = styled.div`
  position: absolute;
  background: white;
  z-index: 2;

  width: 36px;
  height: 36px;
  right: -18px;
  bottom: -18px;
  transform: rotate(45deg);
`;

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
    <MainContainer>
      <AnimationContainer>
        <Container>
          <Image src={imageUrl} alt={name} />
          <DetailsContainer>
            <TextContainer>
              <Title>
                <h2>{name}</h2>
                <HeartButton
                  isHover={false}
                  isLike={isLike}
                  size={"BIG"}
                  onClick={handleClick}
                />
              </Title>
              <p>{description}</p>
            </TextContainer>
          </DetailsContainer>
        </Container>
        <Decoration />
      </AnimationContainer>
    </MainContainer>
  );
};

export default CharacterDetail;
