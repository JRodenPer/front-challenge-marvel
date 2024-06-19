import axios from "axios";
import crypto from "crypto";
import { MARVEL_ENDPOINT } from "./constants";

interface Comic {
  id: string;
  title: string;
  date: string;
  thumbnail: { path: string; extension: "jpg" };
}

export async function fetchComics(
  idCharacter: string | null
): Promise<Comic[]> {
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
      `${MARVEL_ENDPOINT}characters/${idCharacter}/comics`,
      {
        params: {
          ts,
          apikey: publicKey,
          hash,
          limit: 20,
          orderBy: "onsaleDate",
        },
      }
    );

    const comicsData = response.data.data.results.map((result: any) => {
      const dateResult = result.dates.find(
        (item: { type: string; date: string }) => item.type === "onsaleDate"
      )?.date;
      const dateObj = new Date(dateResult);

      const year = dateObj.getFullYear();

      const date = Number.isNaN(year) ? "-" : year.toString();

      return {
        id: result.id.toString(),
        title: result.title,
        date,
        thumbnail: result.thumbnail,
      };
    });

    return comicsData;
  } catch (error) {
    throw new Error("Cannot get comics");
  }
}
