import { TodoList } from 'components/Todo/TodoList';
import { useRecoilValue } from 'recoil';
import { todoListSize } from 'recoilState/todo';

function App() {
  const listSize = useRecoilValue(todoListSize);

  return (
    <div className={'App'}>
      <h1 className={'mb-5'}>Recoil Example</h1>
      <h2 className={'mb-3'}>Current list size is {listSize}</h2>
      <TodoList />
    </div>
  );
}

export default App;
