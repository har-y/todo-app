import { useState } from 'react';
import ContentTodo from './ContentTodo';
import EditTodo from './EditTodo';

const ItemTodo = (props) => {
  const [edit, setEdit] = useState(false);

  const deleteTodoHandler = () => {
    props.onDeleteTodo(props.todo.id);
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
          todo={props.todo}
          onEditTodo={editHandler}
          onDeleteTodo={deleteTodoHandler}
          onCompleteTodo={props.onCompleteTodo}
        />
      )}
      {edit && (
        <EditTodo
          todo={props.todo}
          onEditTodo={props.onEditTodo}
          onCancelEditTodo={editHandler}
        />
      )}
    </li>
  );
};

export default ItemTodo;
