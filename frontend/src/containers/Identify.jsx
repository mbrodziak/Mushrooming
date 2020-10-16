import React from "react";
import Search from '../components/Search';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10rem",
  }
}));

const Identify = () => {

  return (
  <div>
      <Search />
  </div>
  )
};

export default Identify;
