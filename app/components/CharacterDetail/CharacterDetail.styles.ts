import styled, { keyframes } from "styled-components";

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

export const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-top: 1px solid gray;
  animation: ${slideDown} 0.5s ease-out forwards;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 960px;
  height: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 320px;
  height: 320px;
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    max-height: 398px;
  }
  @media (min-width: 480.1px) and (max-width: 768px) {
    width: 278px;
    height: 278px;
  }
  object-fit: cover;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-24);
  text-transform: uppercase;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-48) 0px var(--space-48) var(--space-48);
  gap: var(--space-24);

  @media (max-width: 480px) {
    padding: var(--space-24) var(--space-16) var(--space-48);
  }

  @media (min-width: 480.1px) and (max-width: 768px) {
    padding: var(--space-48);
  }
`;

export const Decoration = styled.div`
  position: absolute;
  background: var(--secondary-color);
  z-index: 2;

  width: var(--space-36);
  height: var(--space-36);
  right: var(--space-neg-18);
  bottom: var(--space-neg-18);
  transform: rotate(var(--rotate-45));
`;
