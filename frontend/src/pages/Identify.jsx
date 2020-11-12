import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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

const Identify = () => {
 const classes = useStyles();
  return (
    <>
      <Grid
        bgcolor="green"
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        text-align="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={8} bgcolor="blue">
          <Box color="white">
            <Typography className={classes.text} variant="body1" align="center">
                Funkcjonalność identyfikacji grzybów pojawi się w przyszłości.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Identify;
