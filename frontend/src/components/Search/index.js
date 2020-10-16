import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';


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
  text: {
    fontSize: '1.0rem',
    '@media (min-width:600px)': { fontSize: '1.3rem'},
    [theme.breakpoints.up('md')]: {fontSize: '1.5rem'},
    fontStyle: 'oblique',
    color: 'white',
    marginTop: '1rem',
    marginBottom: '1.5rem'
  },
  div: {
    marginTop: '10rem',
  }
}));

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.div} align="center">
      <TextField
          id="input"
          align="center"
          label="Wyszukaj grzyba..."
          color="secondary"
          variant="filled"
          className={classes.root}
      />
      <Typography 
      variant="h2"
      className={classes.text}
      align="center"
      >
      LUB
      </Typography>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="secondary" component="span" size="small" className={classes.root}>
          Prześlij zdjęcie do identyfikacji
        </Button>
      </label>
    </div>
  );
};

export default Search;
