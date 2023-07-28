import React, { useState } from 'react';

import ItemTodo from '../itemtodo/ItemTodo';
import ListTodoSortBy from './ListTodoSortBy';

const ListTodo = (props) => {
  const [sortedBy, setSortedBy] = useState('input');

  let sortedData;
  if (sortedBy === 'input') {
    sortedData = props.data;
  }
  if (sortedBy === 'text') {
    sortedData = props.data.slice().sort((a, b) => {
      return a.text.localeCompare(b.text);
    });
  }

  const sortedByHandler = (e) => {
    setSortedBy(e.target.value);
  };

  return (
    <React.Fragment>
      {!props.data.length && (
        <p className="mt-5 h-full w-full pt-10 text-center text-base text-black">
          no data found
        </p>
      )}
      <ul className="w-full space-y-2 pt-5">
        {sortedData.map((arg) => {
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
      <ListTodoSortBy
        data={props.data}
        sortedBy={sortedBy}
        onSorted={sortedByHandler}
      />
    </React.Fragment>
  );
};

export default ListTodo;
