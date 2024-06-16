import axios from "axios";
import crypto from "crypto";
import { MARVEL_ENDPOINT } from "./constants";
import { Character } from "../components/CharacterList/CharacterList.types";

export async function fetchCharacters(): Promise<Character[]> {
  try {
    const publicKey = process.env.MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY;

    if (!publicKey || !privateKey) {
      throw new Error("Cannot find keys");
    }

    const ts = new Date().getTime().toString();
    const hash = crypto
      .createHash("md5")
      .update(ts + privateKey + publicKey)
      .digest("hex");

    const response = await axios.get(`${MARVEL_ENDPOINT}characters`, {
      params: {
        ts,
        apikey: publicKey,
        hash,
        limit: 50,
      },
    });

    const charactersData = response.data.data.results.map((result: any) => ({
      id: result.id.toString(),
      name: result.name,
      thumbnail: result.thumbnail,
    }));

    return charactersData;
  } catch (error) {
    throw new Error("Cannot get characters");
  }
}
