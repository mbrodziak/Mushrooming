import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      color: "white",
      justifyContent: "center",
      width: '25ch',
    },
  },
  input: {
    display: "none",
  },

  div: {
    marginTop: '5rem',
  }
}));

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.div} align="center">
      <TextField
          id="input"
          label="Wyszukaj..."
          align="left"
          color="secondary"
          variant="outlined"
          className={classes.root}
      />
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
      />
      <p></p>
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="secondary" component="span" size="small" className={classes.root}>
          Prześlij zdjęcie...
        </Button>
      </label>
    </div>
  );
};

export default Search;
