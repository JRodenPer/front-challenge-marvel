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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 20px;
  border-top: 1px solid gray;
  animation: ${slideDown} 0.5s ease-out forwards; /* Aplicación de la animación */
`;

const Banner = styled.div`
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 300px; /* Ajustar según tus necesidades */
  object-fit: contain;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const IconContainer = styled.div`
  flex: 0 0 auto;
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
    <Container>
      <Banner>
        <Image src={imageUrl} alt={name} />
      </Banner>
      <DetailsContainer>
        <TextContainer>
          <h2>{name}</h2>
          <p>{description}</p>
        </TextContainer>
        <IconContainer>
          <HeartButton
            isHover={false}
            isLike={isLike}
            size={"BIG"}
            onClick={handleClick}
          />
        </IconContainer>
      </DetailsContainer>
    </Container>
  );
};

export default CharacterDetail;
