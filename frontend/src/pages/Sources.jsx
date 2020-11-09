import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "1.0rem",
    "@media (min-width:600px)": { fontSize: "1.3rem" },
    [theme.breakpoints.up("md")]: { fontSize: "1.5rem" },
    fontStyle: "oblique",
  },
}));

const Sources = () => {
  const classes = useStyles();
  return (
    <>
      <Box 
      display="flex" 
      color="white" 
      align="bottom" 
      justifyContent="center"
      alignItems="center"
      height="100vh"
      >
        <Typography className={classes.text} variant="caption" >
        
        <a href="https://www.ekologia.pl/wiedza/grzyby/" style={{color: 'inherit', textDecoration: 'inherit'}}>ekologia.pl/wiedza/grzyby</a>
        </Typography>
      </Box>
    </>
  );
};

export default Sources;
