import axios from "axios";
import crypto from "crypto";
import CharacterList from "./components/CharacterList";
import { fetchCharacters } from "./utils/fetchCharacters";
import Home from "./components/Home";

export default async function HomePage() {
  return (
    <div>
      <Home />
    </div>
  );
}
