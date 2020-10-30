import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
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

  

const Mushroom = ({mushroom}) => {
    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();


    return (
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.paper} >
            <CardActionArea onClick={() => navigate(location.pathname + '/' + mushroom.id)}>
              <CardMedia className={classes.image}
                component="img"
                alt={mushroom.latin_name}
                height="150"
                image={mushroom.photo}
                opacity="0.5"
                title={mushroom.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {mushroom.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {mushroom.application}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
  );
}

export default Mushroom;