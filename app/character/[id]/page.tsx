"use client";

import { useQuery } from "react-query";
import { fetchComics } from "@/app/utils/fetchComics";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { fetchCharacter } from "@/app/utils/fetchCharacter";

export default function CharacterPage() {
  const pathname = usePathname();

  const [id, setId] = useState<string | null>(null);

  const {
    data: comics,
    isLoading: comicsLoading,
    isError: comicsError,
  } = useQuery(["comics", id], () => fetchComics(id as string), {
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const {
    data: character,
    isLoading: characterLoading,
    isError: characterError,
  } = useQuery(["character", id], () => fetchCharacter(id as string), {
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const pathParts = pathname.split("/");
    const characterId = pathParts[pathParts.length - 1];
    setId(characterId);
  }, [pathname]);

  return (
    <div>
      {character && <h1>Personaje:{character.name}</h1>}
      {comics && (
        <div>
          <h2>Comics:</h2>
          <ul>
            {comics.map((comic) => (
              <li key={comic.id}>{comic.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
