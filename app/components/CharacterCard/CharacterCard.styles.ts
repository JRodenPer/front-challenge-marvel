import styled, { keyframes } from "styled-components";

const opacityAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 480px) {
    max-width: 188.5px;
    min-width: 172.5px;
  }

  animation: ${opacityAnimation} 0.5s ease-out forwards;
`;

export const Image = styled.img`
  width: 100%;
  height: 190px;
  display: block;
  object-fit: cover;
`;

export const Content = styled.section`
  display: flex;
  position: relative;
  border-top: 5.38px solid var(--item-color);
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.5s ease;
  flex: 1;
  background-color: var(--item-color);

  padding: var(--space-16) var(--space-16) var(--space-24);
  gap: var(--space-24);

  isolation: isolate;

  &:hover {
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

export const Name = styled.div`
  font-size: var(--font-size-mid);
  font-weight: var(--font-weight1);

  line-height: var(--line-height-mid);
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Decoration = styled.div`
  position: absolute;
  background: var(--secondary-color);
  z-index: 2;

  width: var(--space-18);
  height: var(--space-18);
  right: var(--space-neg-9);
  bottom: var(--space-neg-9);
  transform: rotate(var(--rotate-45));
`;
