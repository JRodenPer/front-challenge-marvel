export enum ButtonSize {
  SMALL = "SMALL",
  BIG = "BIG",
}

export interface HeartButtonProps {
  isHover: boolean;
  isLike: boolean;
  size?: ButtonSize;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
