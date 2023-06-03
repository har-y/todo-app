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

  const deleTodoHandler = (ID) => {
    console.log(ID);
  };

  return (
    <div className="min-h-screen bg-slate-400">
      <div className="my mx-auto flex max-w-md flex-col space-y-5 py-20 md:max-w-xl">
        <h1 className="mx-auto text-2xl font-bold">TODO LIST</h1>
        <NewTodo onAddTodo={addTodoHandler} />
        <ListTodo data={userData} onDeleteTodo={deleTodoHandler} />
      </div>
    </div>
  );
}

export default App;
