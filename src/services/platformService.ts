import create from "./httpService";

export type TPlatform = {
  id: number;
  name: string;
  image_background: string;
  image: string;
};

export type TPlatformsResponse = {
  count: number;
  results: TPlatform[];
};

export default create("/platforms");
