import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  // const [toDos, setToDos] = useRecoilState(toDoState); // like useState(value, modFn)
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState); // modifier(value를 변경하는 경우), atom의 값을 변경
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
