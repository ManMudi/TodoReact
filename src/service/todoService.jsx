import axios from "axios";

const REST_API_BASE_URL="http://localhost:8080/todo";

export const listTodo=()=>axios.get(REST_API_BASE_URL);

export const addTodo=(todo)=>axios.post(REST_API_BASE_URL,todo);

export const getTodo=(id)=>axios.get(REST_API_BASE_URL +'/'+id);

export const updateTodo=(id,todo)=>axios.put(REST_API_BASE_URL+'/'+id,todo);

export const deleteTodo=(id)=>axios.delete(REST_API_BASE_URL+'/'+id);

export const completeTodo=(id)=>axios.patch(REST_API_BASE_URL+'/'+id+'/complete')

export const inCompleteTodo=(id)=>axios.patch(REST_API_BASE_URL+'/'+id+'/in-complete')