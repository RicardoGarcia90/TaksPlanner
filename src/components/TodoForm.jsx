import { useState } from 'react';

export const TodoForm = ({ onAddTodo }) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  let valueIsValid = false;
  if (value.trim() !== '') {
    valueIsValid = true;
  }

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
    setIsTouched(false);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!valueIsValid) {
      setIsTouched(true);
      return console.log('Input invalido');
    }

    onAddTodo(value);
    setIsTouched(false);
    setValue('');
  };

  const classesInput = hasError ? 'errorInput' : 'todo-input';

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className={classesInput}
        type="text"
        placeholder="Qual é a tarefa de hoje?"
        onChange={valueChangeHandler}
        onBlur={onBlurHandler}
        value={value}
      />
      {hasError && (
        <p className="message-error">Por favor insira uma tarefa!</p>
      )}

      <button type="submit" className="todo-btn">
        Adicionar tarefa
      </button>
    </form>
  );
};
