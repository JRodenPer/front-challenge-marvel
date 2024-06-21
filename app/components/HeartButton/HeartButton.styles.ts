import styled from "styled-components";
import Heart from "@/public/icons/heart.svg";
import HeartBorder from "@/public/icons/heartBorder.svg";
import HeartMin from "@/public/icons/heartMin.svg";
import HeartBorderMin from "@/public/icons/heartBorderMin.svg";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const IconHeart = styled(Heart)<{ $isHover: boolean }>`
  z-index: 1;
  fill: var(--item-color);
  transform: scale(1);
  transition: fill 0.5s;
`;

export const IconHeartBorder = styled(HeartBorder)<{ $isHover: boolean }>`
  z-index: 1;
  fill: white;
  transform: scale(1);
  transition: fill 0.5s;
`;

export const IconHeartMin = styled(HeartMin)<{ $isHover: boolean }>`
  z-index: 1;
  fill: ${(props) =>
    props.$isHover ? "var(--secondary-color)" : "var(--item-color)"};
  transform: scale(1);
  transition: fill 0.5s;
`;

export const IconHeartBorderMin = styled(HeartBorderMin)<{ $isHover: boolean }>`
  z-index: 1;
  fill: ${(props) =>
    props.$isHover ? "var(--secondary-color)" : "var(--item-color)"};
  transform: scale(1);
  transition: fill 0.5s;
`;
