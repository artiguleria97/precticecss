import React from 'react';
import { Container, Typography } from '@mui/material';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { Redirect } from 'react-router-dom';
import LogsPanel from './LogPanel';


const HomePage = () => {
  

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Event Planner App!
        <LogsPanel/>
      </Typography>
      {/* Add your custom content here */}
    </Container>
  );
};

export default HomePage;
