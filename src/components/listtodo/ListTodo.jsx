import ItemTodo from '../itemtodo/ItemTodo';

const ListTodo = (props) => {
  return (
    <ul className="w-full pt-5">
      {props.data.map((arg) => {
        return <ItemTodo key={arg.id} content={arg.text} />;
      })}
    </ul>
  );
};

export default ListTodo;
