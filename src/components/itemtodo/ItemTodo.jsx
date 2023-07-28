import { useState } from 'react';
import ItemTodoContent from './ItemTodoContent';
import ItemTodoEdit from './ItemTodoEdit';

const ItemTodo = (props) => {
  const [edit, setEdit] = useState(false);

  const deleteTodoHandler = () => {
    props.onDeleteTodo(props.todo.id);
  };

  const showEditHandler = () => {
    setEdit((prev) => {
      return !prev;
    });
  };

  return (
    <li className="flex w-full justify-between">
      {!edit && (
        <ItemTodoContent
          todo={props.todo}
          onShowEditTodo={showEditHandler}
          onDeleteTodo={deleteTodoHandler}
          onCompleteTodo={props.onCompleteTodo}
        />
      )}
      {edit && (
        <ItemTodoEdit
          todo={props.todo}
          onEditTodo={props.onEditTodo}
          onCancelEditTodo={showEditHandler}
        />
      )}
    </li>
  );
};

export default ItemTodo;
