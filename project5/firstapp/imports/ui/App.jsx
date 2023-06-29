import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegistrationPage from './component/registeration/RegistrationPage';
import LoginPage from './component/registeration/LoginPage';
import HomePage from './component/home/HomePage';
import PasswordResetForm from './component/registeration/PasswordResetForm';

export const App = () => {
  const cookie = document.cookie;
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        
            <Route path="/home" element={<HomePage />} />
      
          <Route path="/" element={<LoginPage />} />
       
        <Route path="/forgot-password" element={<PasswordResetForm />} />
          
        {/* Add other routes for different pages of your app */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
