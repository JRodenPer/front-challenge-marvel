export interface Character {
  id: string;
  name: string;
  thumbnail: { path: string; extension: "jpg" };
  description?: string;
}
