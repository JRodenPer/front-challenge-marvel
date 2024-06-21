import React, { useRef } from "react";
import * as S from "./ComicList.styles";
import { ComicListProps } from "./ComicList.types";

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
    <S.MainContainer>
      <S.TitleContainer>COMICS</S.TitleContainer>
      <S.ListContainer
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </S.ListContainer>
    </S.MainContainer>
  );
};

export default ComicList;
