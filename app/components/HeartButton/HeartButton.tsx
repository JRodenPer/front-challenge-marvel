import styled from "styled-components";
import Heart from "@/public/icons/heart.svg";
import HeartBorder from "@/public/icons/HeartBorder.svg";
import HeartMin from "@/public/icons/heartMin.svg";
import HeartBorderMin from "@/public/icons/HeartBorderMin.svg";

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const IconHeart = styled(Heart)<{ $isHover: boolean }>`
  z-index: 1;
  fill: red;
  transform: scale(1);
  transition: fill 0.5s;
`;

const IconHeartBorder = styled(HeartBorder)<{ $isHover: boolean }>`
  z-index: 1;
  fill: white;
  transform: scale(1);
  transition: fill 0.5s;
`;

const IconHeartMin = styled(HeartMin)<{ $isHover: boolean }>`
  z-index: 1;
  fill: ${(props) => (props.$isHover ? "white" : "red")};
  transform: scale(1);
  transition: fill 0.5s;
`;

const IconHeartBorderMin = styled(HeartBorderMin)<{ $isHover: boolean }>`
  z-index: 1;
  fill: ${(props) => (props.$isHover ? "white" : "red")};
  transform: scale(1);
  transition: fill 0.5s;
`;

interface HeartButtonProps {
  isHover: boolean;
  isLike: boolean;
  size?: "SMALL" | "BIG";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const HeartButton: React.FC<HeartButtonProps> = ({
  isHover,
  isLike,
  size = "SMALL",
  onClick,
}) => {
  return (
    <Button onClick={onClick}>
      {isLike ? (
        size === "SMALL" ? (
          <IconHeartMin $isHover={isHover} />
        ) : (
          <IconHeart $isHover={isHover} />
        )
      ) : size === "SMALL" ? (
        <IconHeartBorderMin $isHover={isHover} />
      ) : (
        <IconHeartBorder $isHover={isHover} />
      )}
    </Button>
  );
};

export default HeartButton;
