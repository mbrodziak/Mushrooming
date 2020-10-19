import React from "react";
import Search from "../components/Search";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "1.0rem",
    "@media (min-width:600px)": { fontSize: "1.1rem" },
    [theme.breakpoints.up("md")]: { fontSize: "1.2rem" },
    fontStyle: "oblique",
    color: "white",
    marginTop: "1rem",
    marginBottom: "1.5rem",
  },
  div: {
    marginTop: "7rem",
  },
}));

const Identify = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Typography variant="body1" className={classes.text} align="center">
        Wyszukaj grzyba wpisując jego nazwę w poniższe pole lub prześlij zdjęcie grzyba do
        identyfikacji przez nasz system
      </Typography>
      <Search />
    </div>
  );
};

export default Identify;
