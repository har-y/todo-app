import React from 'react';

import SvgIcon from '../utilstodo/SvgIcon';

const ItemTodoContent = (props) => {
  const deleteTodoHandler = () => {
    props.onDeleteTodo();
  };

  const completeTodoHandler = () => {
    props.onCompleteTodo(props.todo);
  };

  return (
    <React.Fragment>
      <div className="ml-2 mr-5 flex-auto border-b-2 border-neutral-100 border-opacity-50 py-2">
        <div className="flex items-center space-x-4">
          <input
            className="border-2 bg-white p-2 text-black hover:border-black"
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
          className="text-teal cursor-pointer rounded border-2 bg-white p-1 text-black hover:border-black"
          onClick={props.onShowEditTodo}
        >
          <SvgIcon svg={'edit_svg'} />
        </button>
        <button
          className="text-teal cursor-pointer rounded border-2 bg-white p-1 text-black hover:border-black"
          onClick={deleteTodoHandler}
        >
          <SvgIcon svg={'delete_svg'} />
        </button>
      </div>
    </React.Fragment>
  );
};

export default ItemTodoContent;
