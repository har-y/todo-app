import { useState } from 'react';
import ContentTodo from './ContentTodo';
import EditTodo from './EditTodo';

const ItemTodo = (props) => {
  const [edit, setEdit] = useState(false);

  const deleteTodoHandler = () => {
    props.onDeleteTodo(props.id);
  };

  const editHandler = () => {
    setEdit((prev) => {
      return !prev;
    });
  };

  return (
    <li className="flex w-full justify-between">
      {!edit && (
        <ContentTodo
          id={props.id}
          content={props.content}
          onEditTodo={editHandler}
          onDeleteTodo={deleteTodoHandler}
          isComplete={props.isComplete}
          onCompleteTodo={props.onCompleteTodo}
        />
      )}
      {edit && (
        <EditTodo
          id={props.id}
          onEditTodo={props.onEditTodo}
          onCancelEditTodo={editHandler}
        />
      )}
    </li>
  );
};

export default ItemTodo;
