import React, { useState } from 'react';

export const TodoForm = ({ onAddTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(value);
    setValue('');
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Qual é a tarefa de hoje?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Adicionar tarefa
      </button>
    </form>
  );
};
