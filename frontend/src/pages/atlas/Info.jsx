import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const fetchDetails = async (id, loc) => {
  if (loc.pathname.includes("borowiki")) {
    const res = await fetch(`http://127.0.0.1:8000/api/mushroom/borowik/${id}`);
    return res.json();
  } else if (loc.pathname.includes("podgrzybki")) {
    const res = await fetch(
      `http://127.0.0.1:8000/api/mushroom/podgrzybek/${id}`
    );
    return res.json();
  } else if (loc.pathname.includes("maslaki")) {
    const res = await fetch(`http://127.0.0.1:8000/api/mushroom/maslak/${id}`);
    return res.json();
  } else if (loc.pathname.includes("muchomory")) {
    const res = await fetch(
      `http://127.0.0.1:8000/api/mushroom/muchomor/${id}`
    );
    return res.json();
  } else return null;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    background: "rgba(41, 40, 38, 0.5)",
    margin: "0 auto",
    width: "80%",
    height: "80%",
  },
  image: {
    opacity: "0.7",
    height: "100%",
    width: "100%",
    borderRadius: "3px",
  },
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Info = () => {
  const classes = useStyles();

  let { id } = useParams();
  let location = useLocation();

  const { data, status } = useQuery([id, location], fetchDetails);

  if (status === "success") console.log(data);

  return (
    <div>
      {status === "error" && <p>Błąd pobierania danych z bazy!</p>}
      {status === "success" && (
        <Box m={5}>
          <Container maxWidth="md">
            <Card className={classes.paper}>
              <Typography variant="h3">{data[0].name}</Typography>
              <Typography variant="h6">{data[0].latin_name}</Typography>
              <CardMedia
                className={classes.image}
                component="img"
                alt={data[0].name}
                image={"http://127.0.0.1:8000" + data[0].photo}
                opacity="0.5"
                title={data[0].name}
              ></CardMedia>
              <Typography>
                {data[0].application}
                <br />
                {data[0].type}
                <br />
                {data[0].taste}
                <br />
                {data[0].smell}
              </Typography>
              <Typography>{data[0].introduction}</Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Kapelusz</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {data[0].rim_hat}
                    <br />
                    {data[0].color_hat}
                    <br />
                    {data[0].shape_hat}
                    <br />
                    {data[0].area_hat}
                    <br />
                    {data[0].description_fruitcake}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Miąsz</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {data[0].color_pulp}
                    <br />
                    {data[0].milk}
                    <br />
                    {data[0].details_type}
                    <br />
                    {data[0].description_pulp}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>Trzon</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {data[0].type_shaft}
                    <br />
                    {data[0].color_shaft}
                    <br />
                    {data[0].shape_shaft}
                    <br />
                    {data[0].area_shaft}
                    <br />
                    {data[0].section_shaft}
                    <br />
                    {data[0].description_shaft}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography className={classes.heading}>
                    Występowanie
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {data[0].incidence_time}
                    <br />
                    {data[0].season}
                    <br />
                    {data[0].habitat}
                    <br />
                    {data[0].existence}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Container>
        </Box>
      )}
    </div>
  );
};

export default Info;
