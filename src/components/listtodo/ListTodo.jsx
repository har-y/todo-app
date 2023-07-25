import React from 'react';

import ItemTodo from '../itemtodo/ItemTodo';

const ListTodo = (props) => {
  return (
    <React.Fragment>
      {!props.data.length && (
        <p className="mt-5 h-full w-full pt-10 text-center text-base text-black">
          no data found
        </p>
      )}
      <ul className="w-full space-y-2 pt-5">
        {props.data.map((arg) => {
          return (
            <ItemTodo
              key={arg.id}
              todo={arg}
              onAddTodo={props.onAddTodo}
              onEditTodo={props.onEditTodo}
              onDeleteTodo={props.onDeleteTodo}
              onCompleteTodo={props.onCompleteTodo}
            />
          );
        })}
      </ul>
      {!!props.data.length && (
        <div className="w-16 border-b-2 border-neutral-100 border-opacity-50 py-2">
          <select className="w-16 rounded-lg">
            <option value="text">text</option>
            <option value="input">input</option>
          </select>
        </div>
      )}
    </React.Fragment>
  );
};

export default ListTodo;
