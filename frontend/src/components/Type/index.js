import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";

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

const Atlas = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
  
    const handleClick = (pageURL) => {
      navigate(pageURL);
    };
  
    return (
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.paper} >
              <CardActionArea onClick={() => handleClick(props.route)}>
                <CardMedia className={classes.image}
                  component="img"
                  alt={props.name}
                  height="150"
                  image={props.source}
                  opacity="0.5"
                  title={props.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {props.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
    )};

export default Atlas;