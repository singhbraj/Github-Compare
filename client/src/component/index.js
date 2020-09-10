import React from 'react'
import SearchBar from './SearchBar';
import {Grid,makeStyles,Typography, Button} from '@material-ui/core'

const useStyles = makeStyles({
   sideBanner:{
       height:'100vh',
       background:'#2F3060',
       textAlign:"center",
       padding:"60px 40px",
       color:'white'
   },
   textPresentaion:{
       padding:"15px",
       fontFamily: "'Roboto', sans-serif"
   },
   subTitleText:{
       color:'#BBBBBB',
      fontWeight:400
   },
   callActionButton:{
       background:"#5D8EE1",
       color:"white",
       fontWeight:400,
       boxShadow:'2px 5px 10px 1px rgba(0,0,0,0.2)',
       '&:hover':{
           background:'mediumseagreen'
       }
   },

  });
  
export default function Layout() {
    const classes = useStyles();
    return (
      <Grid container >
          <Grid item md={7}>
               <SearchBar></SearchBar>
          </Grid>
          <Grid item md={5} className={classes.sideBanner} >
             <Typography variant="h2" className={classes.textPresentaion}>Spot the</Typography>
             <Typography variant="h2" className={classes.textPresentaion}>difference</Typography>
             <Typography variant="h2" className={classes.textPresentaion}>that matter</Typography>
            <br/>
            <Typography variant="subtitle2" className={classes.subTitleText}>Compare your github account</Typography>         
             <br/>
             <Button variant="contained" className={classes.callActionButton}>Start Now</Button>
          </Grid>
      </Grid>
    )
}
