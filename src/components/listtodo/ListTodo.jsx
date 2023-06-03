import ItemTodo from '../itemtodo/ItemTodo';

const ListTodo = (props) => {
  return (
    <ul className="w-full pt-5">
      {props.data.map((arg) => {
        return (
          <ItemTodo
            key={arg.id}
            id={arg.id}
            content={arg.text}
            onDeleteTodo={props.onDeleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default ListTodo;
