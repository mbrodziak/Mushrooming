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
            Wszelkie opisy oraz zdjęcia, znajdujące się na poszczególnych podstronach zostały wykorzystane z następujących źródeł:
            <br />
            <br />
            <a href="https://www.ekologia.pl/wiedza/grzyby/" style={{color: 'inherit', textDecoration: 'inherit'}}>ekologia.pl/wiedza/grzyby</a>
            <br />
            <a href="https://nagrzyby.pl/atlas-obrazkowy/" style={{color: 'inherit', textDecoration: 'inherit'}}>nagrzyby.pl/atlas-obrazkowy</a>
            <br />
            <a href="https://kaggle.com/maysee/mushrooms-classification-common-genuss-images" style={{color: 'inherit', textDecoration: 'inherit'}}>
                kaggle.com/maysee/mushrooms-classification-common-genuss-images</a>
        </Typography>

      </Box>
    </>
  );
};
export default Sources;