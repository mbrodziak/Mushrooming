import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useQuery } from "react-query";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';

const fetchDetails = async (id,loc) => {
    if(loc.pathname.includes("borowiki")) {
        const res = await fetch(`http://127.0.0.1:8000/api/mushroom/borowik/${id}`);
        return res.json();
    }
    else if(loc.pathname.includes("podgrzybki")) {
        const res = await fetch(`http://127.0.0.1:8000/api/mushroom/podgrzybek/${id}`);
        return res.json();
    }
    else if(loc.pathname.includes("maslaki")) {
        const res = await fetch(`http://127.0.0.1:8000/api/mushroom/maslak/${id}`);
        return res.json();
    }
    else if(loc.pathname.includes("muchomory")) {
        const res = await fetch(`http://127.0.0.1:8000/api/mushroom/muchomor/${id}`);
        return res.json();
    }
    else return null;
}

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: "white",
      background: "rgba(41, 40, 38, 0.5)",
      margin: "0 auto",
      width: "80%",
      height: "80%"
    },
    image: {
      opacity: "0.7",
      height: '100%',
      width: '100%',
      borderRadius: '3px'
    }
  }));

const Info = () => {
    const classes = useStyles();

    let {id} = useParams();
    let location = useLocation();
    
    const { data, status } = useQuery([id, location], fetchDetails);

    if(status === "success") console.log(data);

    return (
        <div>
            {status === "error" && <p>Błąd pobierania danych z bazy!</p>}
            {status === "success" && (
                <Box m={5}>
                    <Container maxWidth="md">
                        <Card className={classes.paper}>
                            <CardMedia className={classes.image}
                                component="img"
                                alt={data[0].name}
                                image={'http://127.0.0.1:8000' + (data[0].photo)}
                                opacity="0.5"
                                title={data[0].name}
                            />  
                        </Card> 
                    </Container>
                </Box>
            )}
            
        </div>    
        )
}

export default Info;