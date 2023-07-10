import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

import { TodoForm } from './TodoForm';
import { Todo } from './Todo';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTask) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: newTask, completed: false, isEditing: false },
    ]);

    console.log(todos);
  };

  return (
    <div className="todoWrapper">
      <h1>Tarefas</h1>
      <TodoForm onAddTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoWrapper;
