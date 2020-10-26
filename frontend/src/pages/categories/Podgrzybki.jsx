import React from "react";
import { useQuery } from "react-query";
import Mushroom from "../../components/Mushroom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const fetchPodgrzybki = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/mushroom/podgrzybek/");
  return res.json();
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "2rem",
    marginRight: "2rem",
    marginTop: "3rem",
  }
}));

const Podgrzybki = () => {
  const { data, status } = useQuery("podgrzybki", fetchPodgrzybki);
  const classes = useStyles();

  return (
    <div>
      {status === "error" && <p>Błąd pobierania danych z bazy!</p>}
      {status === "loading" && <p>Wczytywanie danych...</p>}
      {status === "success" && (
        <div className={classes.root}>
          <Grid
            container
            spacing={3}
            direction="row"
            alignItems="stretch"
            justify="center"
          >
            {data.map((mushroom) => (
              <Mushroom key={mushroom.id} mushroom={mushroom} />
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Podgrzybki;
