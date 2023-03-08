import { useQuery } from 'react-query'
import { getTodos } from '../../api/todosApi';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoList = () => {

    const {
        isLoading,
        isError,
        error,
        data: todos
    } = useQuery("todos", getTodos, {
        select: data => data.sort((a, b) => b.id - a.id)
    });

    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{error.message}</p>
    } else {
        content = <>{todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}  </>
    }

    return (
        <main>
            <h1>Todo List</h1>
            <TodoInput />
            {content}
        </main>
    )
}

export default TodoList;