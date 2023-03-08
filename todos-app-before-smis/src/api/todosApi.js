import axios from 'axios';

const todosApi = axios.create({
    baseURL: "http://localhost:3500",
})

export const getTodos = async () => {
    const response = await todosApi.get("/todos");
    return response.data;
}

export const addTodo = async (todo) => {
    const response = await todosApi.post("/todos", todo);
    return response;
}

export const updateTodo = async (todo) => {
    const response = await todosApi.patch(`/todos/${todo.id}`, todo);
    return response;
}

export const deleteTodo = async (todo) => {
    const response = await todosApi.delete(`/todos/${todo.id}`, todo);
    return response;
}