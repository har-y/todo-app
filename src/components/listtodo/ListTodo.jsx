import ItemTodo from '../itemtodo/ItemTodo';

const ListTodo = (props) => {
  return (
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
  );
};

export default ListTodo;
