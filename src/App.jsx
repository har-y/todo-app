import ItemTodo from './components/itemtodo/ItemTodo';
import NewTodo from './components/newtodo/NewTodo';

function App() {
  return (
    <div className="min-h-screen bg-slate-400">
      <div className="my mx-auto flex max-w-md flex-col space-y-5 py-20 md:max-w-xl">
        <h1 className="mx-auto text-2xl font-bold">TODO LIST</h1>
        <NewTodo />
        <ItemTodo />
      </div>
    </div>
  );
}

export default App;
