import { useState } from 'react';

const NewTodo = () => {
  const [newTodo, setNewTodo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(newTodo);

    setNewTodo('');
  };

  const inputChangeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="flex w-full ">
      <input
        className="mr-4 w-full appearance-none rounded border-2 px-3 py-2 text-black shadow outline-none hover:border-black"
        type="text"
        placeholder="enter new todo"
        value={newTodo}
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
