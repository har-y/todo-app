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
    <ul className="w-full pt-5">
      <li className="flex w-full justify-between">
        {!edit && (
          <ContentTodo
            content={props.content}
            onEditTodo={editHandler}
            onDeleteTodo={deleteTodoHandler}
          />
        )}
        {edit && <EditTodo onCancelEditTodo={editHandler} />}
      </li>
    </ul>
  );
};

export default ItemTodo;
