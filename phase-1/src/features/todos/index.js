import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useEffect } from 'react';
import { useTodosStateData, useTodosStateActions } from '../../appState/selectors/todosStateSelector';

const TodosContainer = () => {

    const { isLoading } = useTodosStateData();
    const { loadTodos } = useTodosStateActions();
    useEffect(() => {
        loadTodos();
        //eslint-disable-next-line
    }, [])



    return (
        <main>
            <h1>{`Todo List${isLoading ? ' [Loading]' : ''}`}</h1>
            <TodoInput />
            <TodoList />
        </main>
    )
}

export default TodosContainer;