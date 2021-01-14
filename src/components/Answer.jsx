import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const Answer = (props) => {
  const classes = useStyles();
  return(
    <Button variant="contained">{props.content}</Button>
  )
}


export default Answer