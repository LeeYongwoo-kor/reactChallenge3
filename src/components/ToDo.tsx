import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, LocalStorage, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const addToDos = (newCategory: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const targetToDo = { text, id, category: newCategory };
      const newToDo = [
        ...oldToDos.slice(0, targetIndex),
        targetToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem(LocalStorage.ID, JSON.stringify(newToDo));
      return newToDo;
    }); // 값을 즉시변경
  };
  const deleteToDos = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem(LocalStorage.ID, JSON.stringify(newToDo));
      return newToDo;
    }); // 값을 즉시변경
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button onClick={() => addToDos(Categories.DOING)}>Doing</button>
      )}
      {category !== Categories.TO_DO && (
        <button onClick={() => addToDos(Categories.TO_DO)}>ToDo</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => addToDos(Categories.DONE)}>Done</button>
      )}
      <button onClick={() => deleteToDos()}>Delete</button>
    </li>
  );
}

export default ToDo;
