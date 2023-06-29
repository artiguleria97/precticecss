import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Accounts } from 'meteor/accounts-base';
import { useNavigate } from 'react-router-dom';

const PasswordResetForm = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!email || !newPassword) {
      alert('Please enter your email and new password.');
      return;
    }

    Accounts.forgotPassword({ email }, (error) => {
      if (error) {
        alert(error.reason);
      } else {
        alert('Password reset email sent!');
        navigate('/'); // Redirect to home page after successful password reset
      }
    });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" gutterBottom>
        Reset Password
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="New Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleResetPassword}>
        Reset Password
      </Button>
    </Box>
  );
};

export default PasswordResetForm;
