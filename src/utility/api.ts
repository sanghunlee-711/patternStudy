import { ItemInterface } from "../interface/ItemInterface";

type ItemListInterFace = Array<ItemInterface> | undefined | null;

const api = (url: string): Promise<ItemListInterFace> => {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json().then((data) => data as ItemListInterFace);
  });
};

export default api;

