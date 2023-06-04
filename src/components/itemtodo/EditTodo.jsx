import { useState } from 'react';

const EditTodo = (props) => {
  const [enterUpdateTodo, setUpdateTodo] = useState('');

  const inputChangeHandler = (e) => {
    setUpdateTodo(e.target.value);
  };

  const cancelEditTodoHandler = () => {
    props.onCancelEditTodo();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setUpdateTodo('');
  };

  return (
    <div className="ml-2 mr-5 flex-auto border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
      <form onSubmit={submitHandler} className="flex w-full ">
        <input
          className="flex-1 appearance-none rounded border-2 px-3 py-2 text-black shadow outline-none hover:border-black"
          type="text"
          placeholder="enter new todo"
          value={enterUpdateTodo}
          required
          onChange={inputChangeHandler}
        />

        <div className="ml-2 flex-none space-x-2">
          <button
            type="submit"
            className="text-teal rounded  border-2  bg-white p-2 text-black hover:border-black"
          >
            confirm
          </button>
          <button
            className="text-teal rounded  border-2  bg-white p-2 text-black hover:border-black"
            onClick={cancelEditTodoHandler}
            type="button"
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
