import React from 'react';
import './App.css';
import Header from '../components/Header/'
import Inside from '../components/Inside'
import Bupload from '../components/Bupload'
import Grid from '@material-ui/core/Grid';
import 'fontsource-roboto';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        text-align="center"
        style={{ minHeight: "100vh" }}>
        <Grid item xs={8}>
          <Inside/>
          <Bupload/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
