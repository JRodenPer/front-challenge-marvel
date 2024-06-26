import styled from "styled-components";
import Link from "next/link";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(172.5px, 1fr));
  list-style: none;
  gap: var(--space-16);
  padding: var(--space-12) var(--space-48);
  @media (max-width: 480px) {
    padding: var(--space-12) var(--space-16);
  }
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color-secondary);

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;
