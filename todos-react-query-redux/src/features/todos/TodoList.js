import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useTodosStateData, useTodosStateActions } from '../../appState/selectors/todosStateSelector';

const TodoList = () => {

    const {
        todos,
        isError,
        error,
    } = useTodosStateData();
    const { updateTodo, deleteTodo } = useTodosStateActions();

    console.log("TodoList Updated!!!");

    if (isError) return (<p>{error.message}</p>)

    return (
        <>

            {todos && todos.map((todo) =>
                <article key={todo.id}>
                    <div className="todo">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            id={todo.id}
                            onChange={() =>
                                updateTodo({ ...todo, completed: !todo.completed })
                            }
                        />
                        <label htmlFor={todo.id}>{todo.title}</label>
                    </div>
                    <button className="trash" onClick={() => deleteTodo(todo)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </article>
            )}
        </>
    )

}

export default TodoList;