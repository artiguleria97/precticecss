import React from 'react';
import { Container, Typography, Card, CardContent  } from '@mui/material';
import RegistrationForm from './RegistrationForm';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    margin: '0 auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }
}))

const RegistrationPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm"> 
      <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
             Registration
            </Typography>
            <RegistrationForm />
          </CardContent>
      </Card>
    </Container>
  );
};

export default RegistrationPage;
