import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/api";

export const TodoApp = () => {
  const [todoId, settodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const prevTodo = () => {
    if (todoId === 1) return;
    settodoId(todoId - 1);
  };

  const nextTodo = () => {
    settodoId(todoId + 1);
  };
  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <h4>Is Loading...: {isLoading ? "True" : "False"}</h4>
      <pre>...</pre>
      <div>{JSON.stringify(todo)}</div>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE" : "Pending"}</strong> {todo.title}
          </li>
        ))}
      </ul> */}
      <button onClick={prevTodo}>Previus Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
