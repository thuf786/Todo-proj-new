import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);

    navigate('/Home');
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div
      className="login-container mb-5"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          width: '350px',
          height: '300px',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#ffffff',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '40px' }}>Sign In</h2>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
    </div>
  );
}

export default Login;

