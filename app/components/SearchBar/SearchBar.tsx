import React from "react";
import styled from "styled-components";
import SearchIcon from "@/public/icons/search.svg";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchContainer = styled.div`
  height: 19px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #aaaaaa;
  border-bottom: 1px solid #000000;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  margin-left: 8px;
`;

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <SearchContainer data-testid="search-bar-container">
      <SearchIcon style={{ flex: "none", order: 0, flexGrow: 0 }} />
      <Input
        type="text"
        placeholder="SEARCH A CHARACTER..."
        value={value}
        onChange={onChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;
