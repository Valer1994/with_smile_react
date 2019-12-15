import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { languages } from '../../config/config'


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ControlledOpenSelect = ({ lang }) => {
  const classes = useStyles();
  const [age, setAge] = useState(lang);
  const [open, setOpen] = useState(false);

  const createOurLanguages = (languages) => {
    return Object.keys(languages).map(l => (
        <MenuItem value={l}>{languages[l]}</MenuItem>
    ))
  }
  const location = useLocation()
  const history = useHistory()

  const handleChange = event => {
    const language = event.target.value
    setAge(language);
    const pathName = location.pathname;
    history.push('/' + language + pathName.slice(3))
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{languages[age]}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
        {createOurLanguages(languages)}
        </Select>
      </FormControl>
    </div>
  );
}

export default ControlledOpenSelect