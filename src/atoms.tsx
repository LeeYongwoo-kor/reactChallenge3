import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export enum LocalStorage {
  "ID" = "TODOS",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

const loadToDos = localStorage.getItem(LocalStorage.ID);

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: JSON.parse(loadToDos as any) || [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    console.log(toDos);
    const category = get(categoryState);
    console.log(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
