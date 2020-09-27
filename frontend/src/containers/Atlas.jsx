import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "2rem",
    marginRight: "2rem",
    marginTop: "3rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    background: "rgba(41, 40, 38, 0.5)",
    height: "90%",
  },
  image: {
    opacity: "0.7",
    borderRadius: '3px'
  }
}));

const Atlas = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="stretch"
        justify="center"
      >
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.paper} alignItems="center" >
            <CardActionArea>
              <CardMedia className={classes.image}
                component="img"
                alt="Borowik"
                height="150"
                image="images/borowik.jpg"
                opacity="0.5"
                title="Borowik"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Borowiki
                </Typography>
                <Typography variant="caption text" color="white" component="p">
                Grzyby te są cenione za swój smak i aromat, dlatego są chętnie stosowane jako dodatek do dań lub samodzielna potrawa. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.paper} >
            <CardActionArea>
              <CardMedia className={classes.image}
                component="img"
                alt="Podgrzybek"
                height="150"
                image="images/podgrzybek.jpg"
                title="Podgrzybek"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Podgrzybki
                </Typography>
                <Typography variant="caption text" color="white" component="p">
                Idealnie nadają się do marynowania 
                i suszenia, stanowią też bazę wielu potraw lub świetnie sprawdzają się w roli dodatku, uzupełniającego smak dań. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.paper} >
            <CardActionArea>
              <CardMedia className={classes.image}
                component="img"
                alt="Maslak"
                height="150"
                image="images/maslak.jpg"
                title="Maslak"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Maślaki
                </Typography>
                <Typography variant="caption text" color="white" component="p">
                Odróżniają się od innych grzybów charakterystyczną śliską skórką, która pokrywa kapelusz tych grzybów. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.paper} >
            <CardActionArea>
              <CardMedia className={classes.image}
                component="img"
                alt="Muchomor"
                height="150"
                image="images/muchomor.jpg"
                title="Muchomor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Muchomory
                </Typography>
                <Typography variant="caption text" color="white" component="p">
                To jedne z grzybów które wywołują najwięcej emocji i zaniepokojenia,
                wśród nich są grzyby śmiertelnie trujące jak i niezwykle smaczne.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Atlas;
