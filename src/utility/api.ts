import { ItemInterface } from "../interface/ItemInterface";

type ItemListInterFace = Array<ItemInterface> | undefined | null;

const api = (url: string): Promise<ItemListInterFace> => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    console.log(res.json());
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json().then((data) => data as ItemListInterFace);
  });
};

export default api;
