import React from "react";
import * as S from "./SearchBar.styles";
import SearchIcon from "@/public/icons/search.svg";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <S.SearchContainer data-testid="search-bar-container">
      <S.IconContainer>
        <SearchIcon style={{ flex: "none", order: 0, flexGrow: 0 }} />
      </S.IconContainer>
      <S.Input
        type="text"
        placeholder="SEARCH A CHARACTER..."
        value={value}
        onChange={onChange}
      />
    </S.SearchContainer>
  );
};

export default SearchBar;
