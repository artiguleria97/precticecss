import React from 'react';
import { Container, Typography } from '@mui/material';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { Redirect } from 'react-router-dom';
import LogsPanel from './LogPanel';
import CodeBlock from './CodeBlock';
import MainContainer from './MainContainer';
import AnimatedContainer from './AnimatedContainer';


const HomePage = () => {
  

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Event Planner App!
        <LogsPanel/>
      </Typography>
      <AnimatedContainer/>
      <CodeBlock/>
      <MainContainer/>
      {/* Add your custom content here */}
    </Container>
  );
};

export default HomePage;
