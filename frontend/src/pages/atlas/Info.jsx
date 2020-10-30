import React from "react";
import { useParams } from "react-router-dom";
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

const fetchDetails = async (id) => {
   const res = await fetch(`http://127.0.0.1:8000/mushrooms/${id}/`);
   return res.json();
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

  const { data, status } = useQuery([id], fetchDetails);

  if (status === "success") console.log(data);

  return (
    <div>
      {status === "error" && <p>Błąd pobierania danych z bazy!</p>}
      {status === "success" && (
        <Box m={5}>
          <Container maxWidth="md">
            <Card className={classes.paper}>
              <Typography variant="h3">{data.name}</Typography>
              <Typography variant="h6">{data.latin_name}</Typography>
              <CardMedia
                className={classes.image}
                component="img"
                alt={data.name}
                image={"http://127.0.0.1:8000" + data.photo}
                opacity="0.5"
                title={data.name}
              ></CardMedia>
              <Typography>
                {data.application}
                <br />
                {data.type}
                <br />
                {data.taste}
                <br />
                {data.smell}
              </Typography>
              <Typography>{data.introduction}</Typography>
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
                    {data.rim_hat}
                    <br />
                    {data.color_hat}
                    <br />
                    {data.shape_hat}
                    <br />
                    {data.area_hat}
                    <br />
                    {data.description_fruitcake}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Miąższ</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {data.color_pulp}
                    <br />
                    {data.milk}
                    <br />
                    {data.details_type}
                    <br />
                    {data.description_pulp}
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
                    {data.type_shaft}
                    <br />
                    {data.color_shaft}
                    <br />
                    {data.shape_shaft}
                    <br />
                    {data.area_shaft}
                    <br />
                    {data.section_shaft}
                    <br />
                    {data.description_shaft}
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
                    {data.incidence_time}
                    <br />
                    {data.season}
                    <br />
                    {data.habitat}
                    <br />
                    {data.existence}
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
