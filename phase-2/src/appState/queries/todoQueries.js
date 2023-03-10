import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
    getTodos,
    addTodo as apiAddTodo,
    updateTodo as apiUpdateTodo,
    deleteTodo as apiDeleteTodo
} from '../../api/todosApi';

const useTodoQueryData = () => {

    const {
        isLoading,
        isError,
        error,
        data: todos
    } = useQuery("todos", getTodos, {
        select: data => data.sort((a, b) => b.id - a.id)
    });

    return { todos, isLoading, isError, error };
}

const useTodoQueryActions = () => {

    const queryClient = useQueryClient();

    const addTodoMutation = useMutation(apiAddTodo, {
        onSuccess: () => {
            // Invalidates the cache and refetch.
            queryClient.invalidateQueries("todos");
        }
    });

    const updateTodoMutation = useMutation(apiUpdateTodo, {
        onSuccess: () => {
            // Invalidates the cache and refetch.
            queryClient.invalidateQueries("todos");
        }
    })

    const deleteTodoMutation = useMutation(apiDeleteTodo, {
        onSuccess: () => {
            // Invalidates the cache and refetch.
            queryClient.invalidateQueries("todos");
        }
    })

    const loadTodos = () => { };
    const addTodo = (todo) => addTodoMutation.mutate(todo);
    const updateTodo = (todo) => updateTodoMutation.mutate(todo);
    const deleteTodo = (todo) => deleteTodoMutation.mutate(todo);

    return { loadTodos, addTodo, updateTodo, deleteTodo };
}

export { useTodoQueryData, useTodoQueryActions };