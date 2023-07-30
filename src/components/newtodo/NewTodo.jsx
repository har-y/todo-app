import { useState } from 'react';
import { nanoid } from 'nanoid';

import SvgIcon from '../utilstodo/SvgIcon';

const NewTodo = (props) => {
  const [enterNewTodo, setNewTodo] = useState('');

  const inputChangeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodoHandler = () => {
    props.onAddTodo({
      id: nanoid(10),
      text: enterNewTodo,
      completed: false,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addTodoHandler();
    setNewTodo('');
  };

  return (
    <form onSubmit={submitHandler} className="flex w-full space-x-2">
      <input
        className="w-full appearance-none rounded border-2 px-3 py-2 text-black shadow outline-none hover:border-black"
        type="text"
        placeholder="enter new todo"
        value={enterNewTodo}
        required
        maxLength={40}
        onChange={inputChangeHandler}
      />
      <button
        type="submit"
        className="text-teal cursor-pointer rounded border-2 bg-white p-2 text-black hover:border-black"
      >
        <SvgIcon svg={'add_svg'} />
      </button>
    </form>
  );
};

export default NewTodo;
