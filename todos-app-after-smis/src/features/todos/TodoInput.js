import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query'
import { addTodo } from '../../api/todosApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const TodoInput = () => {

    const [todoText, setTodoText] = useState('');
    const queryClient = useQueryClient();
    const addTodoMutation = useMutation(addTodo, {
        onSuccess: () => {
            // Invalidates the cache and refetch.
            queryClient.invalidateQueries("todos");
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoMutation.mutate({ userId: 1, title: todoText, completed: false });
        setTodoText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </form>
    )
}

export default TodoInput