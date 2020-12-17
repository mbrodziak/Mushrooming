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

const Map = () => {
  const classes = useStyles();
  return (
    <Box
      color="white"
      display="flex"
      flexDirection="column"
      alignContent="space-around"
      alignItems="space-around"
      justifyContent="space-around"
      height="80vh"
    >
      <Typography className={classes.text} variant="body1" align="center">
        Mapa występowania pojawi się w przyszłości.
      </Typography>
    </Box>
  );
};

export default Map;
