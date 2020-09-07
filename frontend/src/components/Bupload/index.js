import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      size: 'large'
    },
  }));
  

const Bupload = () => {
  const classes = useStyles();
  return (
    <Box
    padding='2rem 2rem 2rem 2rem'
    margin='auto'
    display='flex'
    alignItems= 'center'
    justifyContent= 'center'
    >
      <Button
        size="large"
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}>
        Prześlij zdjęcie
        </Button>
    </Box>
  );
};

export default Bupload;