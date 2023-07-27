import { useState } from 'react';

import NewTodo from './components/newtodo/NewTodo';
import ListTodo from './components/listtodo/ListTodo';
import todoData from './assets/data/todo-data';

function App() {
  const [userData, setUserData] = useState(todoData);

  const addTodoHandler = (newTodo) => {
    setUserData((prev) => {
      return [...prev, newTodo];
    });
  };

  const deleteTodoHandler = (ID) => {
    setUserData((prev) => {
      return prev.filter((arg) => {
        return arg.id !== ID;
      });
    });
  };

  const editTodoHandler = (editTodo) => {
    setUserData((prev) => {
      return prev.map((arg) => {
        return arg.id === editTodo.id ? { ...arg, text: editTodo.text } : arg;
      });
    });
  };

  const completeTodoHandler = (completeTodo) => {
    setUserData((prev) => {
      return prev.map((arg) => {
        return arg.id === completeTodo.id
          ? { ...arg, completed: !arg.completed }
          : arg;
      });
    });
  };

  return (
    <div className="flex min-h-screen flex-row items-center justify-center bg-slate-400">
      <div className="flex w-1/4 flex-col items-end space-y-5 rounded-md border-2 border-neutral-100 border-opacity-50 p-5 outline outline-2 outline-offset-4 outline-neutral-100/50">
        <h1 className="mx-auto text-2xl font-bold text-neutral-200 drop-shadow-lg">
          ToDo App
        </h1>
        <NewTodo onAddTodo={addTodoHandler} />
        <ListTodo
          data={userData}
          onEditTodo={editTodoHandler}
          onDeleteTodo={deleteTodoHandler}
          onCompleteTodo={completeTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
