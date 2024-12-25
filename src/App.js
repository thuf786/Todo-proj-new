import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uploadTodoStatus, setUploadTodoStatus] = useState({});

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

      {/* Private route */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home
              setUploadTodoStatus={setUploadTodoStatus}
              uploadTodoStatus={uploadTodoStatus}
            />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
