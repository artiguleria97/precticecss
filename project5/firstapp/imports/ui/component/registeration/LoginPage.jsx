import React from 'react';
import { Container, Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    margin: '0 auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
}))

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card className={classes.card}>
        <CardContent>
             <Typography variant="h4" align="center" gutterBottom>
              Login
             </Typography>
             <LoginForm />
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginPage;
