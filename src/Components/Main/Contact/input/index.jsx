import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../../Contact/style.scss'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 255,
      height: 40,
    },
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 255,
      },
  },
}));

export default function BasicTextFields () {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Name*" />
        <TextField id="standard-basic" label="Email*" />
        <TextField
            id="standard-textarea"
            label="Message*"
            multiline
            rows="4"
            />
        <button className='submitMessageButton'>Submit Now</button>
    </form>
  );
}