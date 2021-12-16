import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
