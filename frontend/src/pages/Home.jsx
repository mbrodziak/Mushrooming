import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "1.0rem",
    "@media (min-width:600px)": { fontSize: "1.3rem" },
    [theme.breakpoints.up("md")]: { fontSize: "1.5rem" },
    fontStyle: "oblique",
  },
}));
  
const Home = () => {
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
              Mushrooming to nowoczesny internetowy atlas grzybów. Umożliwia on przeglądanie rozmaitych gatunków
              grzybów. W przyszłości możliwe będzie również wyszukiwanie grzybów oraz ich identyfikację
              z przesyłanych zdjęć za pomocą sztucznej inteligencji.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box display="flex" color="white" align="bottom" justifyContent="center">
        <Link
          to="/zrodla"
          style={{ color: "inherit", textDecoration: "inherit", fontSize: ".9rem" }}
        >
          Źródła
        </Link>
      </Box>
    </>
  );
};

export default Home;