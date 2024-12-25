import { commonAPI } from "./commonApi";

const serverURL = 'http://localhost:3001';

// To upload a new todo
export const uploadTodo = async (reqBody) => {
  return await commonAPI('POST', `${serverURL}/todolist`, reqBody);
};

// To get all todos
export const getAllTodos = async () => {
  return await commonAPI('GET', `${serverURL}/todolist`, "");
};

// To delete a specific todo
export const deleteTodo = async (id) => {
  return await commonAPI('DELETE', `${serverURL}/todolist/${id}`, {});
};

// To get data of a todo by ID
export const getTodoDetailsById = async (id) => {
  return await commonAPI('GET', `${serverURL}/todolist/${id}`, "");
};

// To update a specific todo
export const updateTodo = async (id, reqBody) => {
  return await commonAPI('PUT', `${serverURL}/todolist/${id}`, reqBody);
};
