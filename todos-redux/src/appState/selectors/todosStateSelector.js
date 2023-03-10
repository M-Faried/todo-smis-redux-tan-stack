import { useSelector, useDispatch } from 'react-redux';
import {
    selectTodos,
    loadTodos as loadTodosRdx,
    addTodo as addTodoRdx,
    updateTodo as updateTodoRdx,
    deleteTodo as deleteTodoRdx,
} from '../redux/todosSlice';

export const useTodosStateData = () => {
    const { todos, isLoading, isError, error } = useSelector(selectTodos);
    return { isLoading, isError, error, todos };
}

export const useTodosStateActions = () => {
    const dispatch = useDispatch();
    const loadTodos = () => dispatch(loadTodosRdx());
    const addTodo = (todo) => dispatch(addTodoRdx(todo));
    const updateTodo = (todo) => dispatch(updateTodoRdx(todo));
    const deleteTodo = (todo) => dispatch(deleteTodoRdx(todo));
    return { loadTodos, addTodo, updateTodo, deleteTodo };
}