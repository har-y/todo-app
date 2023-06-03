import { useState } from 'react';

const NewTodo = () => {
  const [enterNewTodo, setNewTodo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enterNewTodo);

    setNewTodo('');
  };

  const inputChangeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="flex w-full space-x-2">
      <input
        className="w-full appearance-none rounded border-2 px-3 py-2 text-black shadow outline-none hover:border-black"
        type="text"
        placeholder="enter new todo"
        value={enterNewTodo}
        required
        onChange={inputChangeHandler}
      />
      <button
        type="submit"
        className="text-teal rounded  border-2  bg-white p-2 text-black hover:border-black"
      >
        ADD
      </button>
    </form>
  );
};

export default NewTodo;
