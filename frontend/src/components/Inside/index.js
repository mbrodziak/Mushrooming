import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text: {
      fontSize: '1.0rem',
      '@media (min-width:600px)': { fontSize: '1.3rem'},
      [theme.breakpoints.up('md')]: {fontSize: '1.5rem'},
      fontStyle: 'oblique',
    },
  }));
  

const Text = () => {
    const classes = useStyles();
    return (
        <Box color ='white'>
          <Typography 
          className={classes.text}
          variant="body1">
            Mushrooming to nowoczesny internetowy atlas grzybów wykorzystujący sztuczną inteligencję. Umożliwia on przeglądanie i wyszukiwanie rozmaitych gatunków grzybów oraz ich identyfikajcę z przesyłanych zdjęć.
          </Typography>
        </Box>
    )   
}

export default Text;