import React from 'react';

const ContentTodo = (props) => {
  const deleteTodoHandler = () => {
    props.onDeleteTodo();
  };

  return (
    <React.Fragment>
      <div className="ml-2 mr-5 flex-auto border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
        <p>{props.content}</p>
      </div>
      <div className="flex-none space-x-2">
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
