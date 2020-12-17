import React from "react";
import Typography from "@material-ui/core/Typography";
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
    <Box 
      display="flex" 
      flexDirection="column" 
      alignContent="space-around"
      alignItems="space-around"
      justifyContent="space-around"
      height="80vh"
      >
      <Box color="white" marginRight="10rem" marginLeft="10rem">
        <Typography className={classes.text} variant="body1" align="center">
          Mushrooming to nowoczesny internetowy atlas grzybów. Umożliwia on
          przeglądanie rozmaitych gatunków grzybów. W przyszłości możliwe będzie
          również wyszukiwanie grzybów oraz ich identyfikację z przesyłanych
          zdjęć za pomocą sztucznej inteligencji.
        </Typography>
      </Box>
      <Box color="white" 
        position="fixed" 
        left="0" 
        bottom="0" 
        textAlign="center" 
        width="100%">
        <Link
          to="/zrodla"
          style={{
            color: "inherit",
            textDecoration: "inherit",
            fontSize: ".9rem",
          }}
          >Źródła
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
