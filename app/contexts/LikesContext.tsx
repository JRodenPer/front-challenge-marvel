import React, { ReactNode, createContext, useContext, useState } from "react";

export type LikesContextType = {
  idCharacters: string[];
  likeView: boolean;
  addId: (id: string) => void;
  removeId: (id: string) => void;
  activeLikeView: () => void;
  activeFullView: () => void;
};

type LikesProviderProps = {
  children: ReactNode;
};

export const LikesContext = createContext<LikesContextType>({
  idCharacters: [],
  likeView: false,
  addId: () => {},
  removeId: () => {},
  activeLikeView: () => {},
  activeFullView: () => {},
});

export const useLikes = () => useContext(LikesContext);

export const LikesProvider: React.FC<LikesProviderProps> = ({ children }) => {
  const [idCharacters, setidCharacters] = useState<string[]>([]);
  const [likeView, setLikeView] = useState<boolean>(false);

  const addId = (id: string) => {
    setidCharacters([...idCharacters, id]);
  };

  const removeId = (id: string) => {
    setidCharacters(idCharacters.filter((item) => item !== id));
  };

  const activeLikeView = () => {
    setLikeView(true);
  };

  const activeFullView = () => {
    setLikeView(false);
  };

  return (
    <LikesContext.Provider
      value={{
        idCharacters,
        likeView,
        addId,
        removeId,
        activeLikeView,
        activeFullView,
      }}
    >
      {children}
    </LikesContext.Provider>
  );
};
