import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useTodosStateActions } from '../../appState/selectors/todosStateSelector';

const TodoInput = () => {

    const [todoText, setTodoText] = useState('');
    const { addTodo } = useTodosStateActions();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ userId: 1, title: todoText, completed: false });
        setTodoText('');
    }

    console.log("TodoInput Updated!!!");

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

export default TodoInput;