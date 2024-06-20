"use client";

import { useQuery } from "react-query";
import { fetchComics } from "@/app/utils/fetchComics";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { fetchCharacter } from "@/app/utils/fetchCharacter";
import CharacterDetail from "@/app/components/CharacterDetail";
import LoadingBar from "@/app/components/LoadingBar";
import ComicList from "@/app/components/ComicList";
import ComicCard from "@/app/components/ComicCard";

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
      {(comicsLoading || characterLoading) && (
        <LoadingBar isLoading={!comicsLoading && !characterLoading} />
      )}
      {character && (
        <CharacterDetail
          imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          name={character.name}
          description={character.description}
          id={character.id}
        />
      )}
      {comics && (
        <ComicList>
          {comics.map((comic) => (
            <ComicCard
              key={comic.id}
              imageUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              title={comic.title}
              date={comic.date}
            />
          ))}
        </ComicList>
      )}
    </div>
  );
}
