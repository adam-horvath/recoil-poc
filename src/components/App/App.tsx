import { TodoList } from 'components/Todo/TodoList';
import { useRecoilValue } from 'recoil';
import { todoList } from 'recoilState/todo';

function App() {
  const list = useRecoilValue(todoList);

  return (
    <div className={'App'}>
      <h1 className={'mb-5'}>Recoil Example</h1>
      <h2 className={'mb-3'}>Current list size is {list.length}</h2>
      <TodoList />
    </div>
  );
}

export default App;
