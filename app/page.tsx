import axios from "axios";
import crypto from "crypto";
import CharacterList from "./components/CharacterList";
import { fetchCharacters } from "./utils/fetchCharacters";

export default async function Home() {
  const characters = await fetchCharacters();

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <CharacterList characters={characters} />
    </div>
  );
}
