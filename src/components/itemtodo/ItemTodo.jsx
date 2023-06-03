const ItemTodo = () => {
  return (
    <ul className="w-full pt-5">
      <li className="flex w-full justify-between">
        <div className="ml-2 mr-5 flex-auto border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
          <p>todo</p>
        </div>
        <div className="flex-none space-x-2">
          <button className="text-teal rounded  border-2  bg-white p-2 text-black hover:border-black">
            edit
          </button>
          <button className="text-teal rounded  border-2  bg-white p-2 text-black hover:border-black">
            delete
          </button>
        </div>
      </li>
    </ul>
  );
};

export default ItemTodo;
