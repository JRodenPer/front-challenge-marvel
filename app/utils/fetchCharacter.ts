import axios from "axios";
import crypto from "crypto";
import { MARVEL_ENDPOINT } from "./constants";
import { Character } from "../components/CharacterList/CharacterList.types";

export async function fetchCharacter(
  idCharacter: string | null,
): Promise<Character> {
  try {
    const publicKey = process.env.MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY;

    if (!idCharacter) throw new Error("Character id is not defined");

    if (!publicKey || !privateKey) {
      throw new Error("Cannot find keys");
    }

    const ts = new Date().getTime().toString();
    const hash = crypto
      .createHash("md5")
      .update(ts + privateKey + publicKey)
      .digest("hex");

    const response = await axios.get(
      `${MARVEL_ENDPOINT}characters/${idCharacter}`,
      {
        params: {
          ts,
          apikey: publicKey,
          hash,
        },
      },
    );

    const characterData = response.data.data.results.map((result: any) => ({
      id: result.id.toString(),
      name: result.name,
      description: result.description,
      thumbnail: result.thumbnail,
    }));
    return characterData[0];
  } catch (error) {
    throw new Error("Cannot get the character");
  }
}
