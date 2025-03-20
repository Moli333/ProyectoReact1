import { useState } from "react";

const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  const addTodoItem = () => {
    const currentTodos = [...todos];
    currentTodos.push(todoName);

    setTodos(currentTodos);
    setTodoName("");
  };

  const onInputChange = (e) => {
    const value = e.target.value;
    setTodoName(value);
  };

  return (
    <>
      <h1> My Todo List</h1>
      <div>
        <input
          onChange={onInputChange} 
          value={todoName}
          />
        <button onClick={addTodoItem}>Add</button>
        <ul>
          {todos.map((Todo, index) => {
            return <li key={index}> {Todo} </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoListApp;
