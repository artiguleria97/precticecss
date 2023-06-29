import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { UserSchema } from '/imports/api/users/Users.js';
import { Meteor } from 'meteor/meteor';
const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form inputs
    try {
      UserSchema.pick('email', 'password').validate({ email, password });

      // Perform login logic
      Meteor.loginWithPassword(email, password, (error) => {
        if (error) {
          console.error(error);
          // Handle login error
        } else {
          // Login successful, redirect or perform additional actions
          navigate("/home")
        }
      });
    } catch (error) {
      console.error(error);
      // Handle validation error
    }
  };

  return (
<form onSubmit={handleSubmit}>
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body2" align="center">
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body2" align="center">
        Forgot your password? <Link to="/forgot-password">Reset Password</Link>
      </Typography>
    </Grid>
  </Grid>
</form>
  );
};

export default LoginForm;
