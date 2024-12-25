import React from 'react';
import Addtodo from '../components/Addtodo';
import Listtodo from '../components/Listtodo';

function Home({ setUploadTodoStatus, uploadTodoStatus }) {
  return (
    <div
      className="d-flex flex-column justify-content-between align-items-center vh-60"
      style={{ padding: '20px' }}
    >
      <h3 className="text-primary text-center mt-3">To Do Application</h3>
      <div className="w-50">
        <Addtodo setUploadTodoStatus={setUploadTodoStatus} />
        <Listtodo uploadTodoStatus={uploadTodoStatus} />
      </div>
    </div>
  );
}

export default Home;
