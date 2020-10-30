import React from "react";
import Type from '../../components/Type';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "2rem",
    marginRight: "2rem",
    marginTop: "3rem",
  }
}));

const Index = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="stretch"
        justify="center" >
        <Type 
          name="Borowiki" 
          source="images/borowik.jpg"
          route="borowiki"
          description="Grzyby te są cenione za swój smak i aromat, dlatego są chętnie stosowane jako dodatek do dań lub samodzielna potrawa"
        />
        <Type 
          name="Podgrzybki" 
          source="images/podgrzybek.jpg"
          route="podgrzybki"
          description="Idealnie nadają się do marynowania i suszenia, stanowią też bazę wielu potraw lub świetnie sprawdzają się w roli dodatku, uzupełniającego smak dań"
        />
        <Type 
          name="Maślaki" 
          source="images/maslak.jpg"
          route="maslaki"
          description="Odróżniają się od innych grzybów charakterystyczną śliską skórką, która pokrywa kapelusz tych grzybów"
        />
        <Type 
          name="Muchomory" 
          source="images/muchomor.jpg"
          route="muchomory"
          description="To jedne z grzybów które wywołują najwięcej emocji i zaniepokojenia, wśród nich są grzyby śmiertelnie trujące jak i niezwykle smaczne"
        />
        <Type
          name="Mleczaje"
          source="images/mleczaj.jpg"
          route="mleczaje"
          description="Niektóre gatunki są jadalne i cenione przez grzybiarzy, niektóre są niejadalne z powodu gorzkiego mleczka, ale i te po odpowiednim przyrządzeniu w niektórych krajach są uważane za smaczne grzyby jadalne"
        />
      </Grid>
    </div>
  )
};

export default Index;