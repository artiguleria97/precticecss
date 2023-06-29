import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '400px',
    overflow: 'auto',
    padding: theme.spacing(2),
  },
  logEntry: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(1),
  },
}));

function LogsPanel() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Logs Panel
      </Typography>
      <div className={classes.logEntry}>
        <Typography variant="body1">
          [Timestamp] Log entry 1
        </Typography>
      </div>
      <div className={classes.logEntry}>
        <Typography variant="body1">
          [Timestamp] Log entry 2
        </Typography>
      </div>
      {/* Add more log entries here */}
    </Paper>
  );
}

export default LogsPanel;
