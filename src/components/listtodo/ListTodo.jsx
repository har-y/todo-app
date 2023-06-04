import ItemTodo from '../itemtodo/ItemTodo';

const ListTodo = (props) => {
  return (
    <ul className="w-full space-y-2 pt-5">
      {props.data.map((arg) => {
        return (
          <ItemTodo
            key={arg.id}
            id={arg.id}
            content={arg.text}
            onAddTodo={props.onAddTodo}
            onEditTodo={props.onEditTodo}
            onDeleteTodo={props.onDeleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default ListTodo;
