import TodoList from "./features/todos";
import injectStateProvider from './appState/injectors/injectSateProvider'

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default injectStateProvider(App);
