import { useState } from 'react';
import ItemTodoContent from './ItemTodoContent';
import ItemTodoEdit from './ItemTodoEdit';

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
        <ItemTodoContent
          todo={props.todo}
          onEditTodo={editHandler}
          onDeleteTodo={deleteTodoHandler}
          onCompleteTodo={props.onCompleteTodo}
        />
      )}
      {edit && (
        <ItemTodoEdit
          todo={props.todo}
          onEditTodo={props.onEditTodo}
          onCancelEditTodo={editHandler}
        />
      )}
    </li>
  );
};

export default ItemTodo;
