import React, { ReactNode, createContext, useContext, useState } from "react";

type LikesContextType = {
  idCharacters: string[];
  addId: (id: string) => void;
  removeId: (id: string) => void;
};

type LikesProviderProps = {
  children: ReactNode;
};

const LikesContext = createContext<LikesContextType>({
  idCharacters: [],
  addId: () => {},
  removeId: () => {},
});

export const useLikes = () => useContext(LikesContext);

export const LikesProvider: React.FC<LikesProviderProps> = ({ children }) => {
  const [idCharacters, setidCharacters] = useState<string[]>([]);

  const addId = (id: string) => {
    setidCharacters([...idCharacters, id]);
  };

  const removeId = (id: string) => {
    setidCharacters(idCharacters.filter((item) => item !== id));
  };

  return (
    <LikesContext.Provider value={{ idCharacters, addId, removeId }}>
      {children}
    </LikesContext.Provider>
  );
};
