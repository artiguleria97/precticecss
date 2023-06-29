import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { UserSchema } from '/imports/api/users/Users.js';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
  const navigate = useNavigate();
  console.log(UserSchema)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validate form inputs
    try {
      UserSchema.validate({ name, email, password });
      // Additional validation logic for confirmPassword
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }
  
      // Perform registration logic
      const user = {
        name,
        email,
        password,
      };
  
      // Call your Meteor registration method or use the Accounts.createUser function
      Accounts.createUser(user, (error) => {
        if (error) {
          console.error(error);
          // Handle registration error
        } else {
          // Registration successful, redirect or perform additional actions
          navigate('/');
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
            type="text"
            label="Name"
            value={name}
            onChange={handleNameChange}
            fullWidth
          />
        </Grid>
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
          <TextField
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegistrationForm;
