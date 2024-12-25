import React, { useEffect, useState } from 'react';
import {  deleteTodo, getAllTodos, getTodoDetailsById, updateTodo } from '../services/allAPI';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function Listtodo(uploadTodoStatus) {
  const [allTodo, setAllTodo] = useState([]);
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [show, setShow] = useState(false);

  const getAllTodoItem = async () => {
    const response = await getAllTodos();
    const { data } = response;
    setAllTodo(data);
  };

  const handleClose = () => {
    setShow(false);
    setTaskName('');
    setTaskDescription('');
    setCurrentTodoId(null);
  };
  
  const handleShow = () => setShow(true);

  const removeTodo = async (id) => {
    await deleteTodo(id);
    alert('Successfully Deleted the task');
    getAllTodoItem();
  };

  const getTaskDetails = async (id) => {
    handleShow();
    const res = await getTodoDetailsById(id);
    const { todoName, todoDescription } = res.data;
    setCurrentTodoId(id);
    setTaskName(todoName);
    setTaskDescription(todoDescription);
  };

  const saveTaskChanges = async () => {
    if (currentTodoId) {
      await updateTodo(currentTodoId, { todoName: taskName, todoDescription: taskDescription });
      alert('Task updated successfully!');
      getAllTodoItem();
      handleClose();
    }
  };

  useEffect(() => {
    getAllTodoItem();
  }, [uploadTodoStatus]);

  return (
    <>
      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Description</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {allTodo?.length > 0 ? (
              allTodo.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.todoName}</td>
                  <td>{item.todoDescription}</td>
                  <td>
                    <Button onClick={() => getTaskDetails(item.id)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button className="ms-3" onClick={() => removeTodo(item.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <p>No Todo Items</p>
            )}
          </tbody>
        </table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-3">
            <input
              type="text"
              className="form-control border border-primary"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <textarea
              name="review"
              id="review"
              cols="30"
              rows="2"
              className="form-control border border-primary"
              placeholder="Task Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveTaskChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Listtodo;
