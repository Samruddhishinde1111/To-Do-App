import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem"; // Import TodoItem component

const TodoList = () => {
  const [todos, setTodos] = useState([]); // State to store tasks

  // Fetch data from JSONPlaceholder when the component loads
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5") // Fetch 5 tasks
      .then((response) => setTodos(response.data)) // Store fetched data
      .catch((error) => console.error("Error fetching To-Do tasks:", error));
  }, []);

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} /> // Display each task
        ))}
      </ul>
    </div>
  );
};

export default TodoList;