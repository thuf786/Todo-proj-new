import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import './index.css';

ReactDOM.render(
  <GoogleOAuthProvider clientId="513809551871-3t59htd9aubtshu4ok3ittqhkb3bnfet.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
