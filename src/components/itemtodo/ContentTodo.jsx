import React from 'react';

const ContentTodo = (props) => {
  const deleteTodoHandler = () => {
    props.onDeleteTodo();
  };

  const completeTodoHandler = () => {
    props.onCompleteTodo(props.todo);
  };

  return (
    <React.Fragment>
      <div className="ml-2 mr-5 flex-auto border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
        <div className="flex items-center space-x-4">
          <input
            className="border-2  bg-white p-2 text-black hover:border-black"
            type="checkbox"
            checked={props.todo.completed}
            onChange={completeTodoHandler}
          />
          <p className={props.todo.completed ? 'line-through' : ''}>
            {props.todo.text}
          </p>
        </div>
      </div>
      <div className="flex flex-none items-center space-x-2">
        <button
          className="text-teal rounded  border-2  bg-white p-2 text-black hover:border-black"
          onClick={props.onEditTodo}
        >
          edit
        </button>
        <button
          className="text-teal rounded  border-2  bg-white p-2 text-black hover:border-black"
          onClick={deleteTodoHandler}
        >
          delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default ContentTodo;
