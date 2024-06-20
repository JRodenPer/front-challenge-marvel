import React, { useRef } from "react";
import styled from "styled-components";

interface ComicListProps {
  children: React.ReactNode;
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 48px;
  gap: 24px;
`;

const ListContainer = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: flex-start;
  cursor: grab;
  user-select: none;
  width: 960px;
  gap: 16px;
  padding-bottom: 24px;
  overflow-x: hidden;
  max-width: 100%;
  padding-left: var(--space-24);

  img {
    user-drag: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding-left: 0;
    overflow-x: auto;
    &:active {
      cursor: grabbing;
    }

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--item-color);
    }

    &::-webkit-scrollbar-track {
      background-color: #d9d9d9;
    }
    &::-webkit-scrollbar-thumb:hover {
      cursor: default;
    }
    &::-webkit-scrollbar-track:hover {
      cursor: default;
    }
  }
`;

const TitleContainer = styled.div`
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  cursor: grab;
  user-select: none;
  width: 960px;
  align-items: stretch;
  max-width: 100%;

  @media (max-width: 768px) {
    padding-left: var(--space-24);
  }
`;

const ComicList: React.FC<ComicListProps> = ({ children }) => {
  const listRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown = true;
    if (listRef.current) {
      startX = e.pageX - listRef.current.offsetLeft;
      scrollLeft = listRef.current.scrollLeft;
    }
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    if (listRef.current) {
      const x = e.pageX - listRef.current.offsetLeft;
      const walk = x - startX;
      listRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDown = true;
    if (listRef.current) {
      startX = e.touches[0].pageX - listRef.current.offsetLeft;
      scrollLeft = listRef.current.scrollLeft;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDown) return;
    if (listRef.current) {
      const x = e.touches[0].pageX - listRef.current.offsetLeft;
      const walk = x - startX;
      listRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    isDown = false;
  };

  return (
    <MainContainer>
      <TitleContainer>COMICS</TitleContainer>
      <ListContainer
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </ListContainer>
    </MainContainer>
  );
};

export default ComicList;
