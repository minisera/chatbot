import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( {
    button: {
      backgroundColor: "#07B901",
      borderColor: "#07B901",
      color: "#fff",
      fontWeight: 600,
      marginBottom: "8px",
      width: "100%",
      "&:hover": {
        backgroundColor: "#A1F0A4",
        borderColor: "#A1F0A4",
        color: "#fff"
      }
    }
});

const Answer = (props) => {
  const classes = useStyles();

  return(
    <Button className={classes.button} variant="outlined" onClick={() => props.select(props.content,props.nextId)}>{props.content}</Button>
  );
}


export default Answer