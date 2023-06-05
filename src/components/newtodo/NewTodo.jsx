import { useState } from 'react';

const NewTodo = (props) => {
  const [enterNewTodo, setNewTodo] = useState('');
  const [key, setKey] = useState(3);

  const submitHandler = (e) => {
    e.preventDefault();

    props.onAddTodo({ id: key, text: enterNewTodo });

    setNewTodo('');
    setKey((prev) => {
      return prev + 1;
    });
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
        maxLength={40}
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
