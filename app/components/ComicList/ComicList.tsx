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
`;

const ListContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: grab;
  user-select: none;
  width: 960px;
  align-items: stretch;

  &:active {
    cursor: grabbing;
  }

  img {
    user-drag: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: red;
  }

  &::-webkit-scrollbar-track {
    background-color: #d9d9d9;
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
  padding: 16px;
  cursor: grab;
  user-select: none;
  width: 960px;
  align-items: stretch;
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

  const handleMouseLeave = () => {
    isDown = false;
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

  return (
    <MainContainer>
      <TitleContainer>COMICS</TitleContainer>
      <ListContainer
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {children}
      </ListContainer>
    </MainContainer>
  );
};

export default ComicList;
