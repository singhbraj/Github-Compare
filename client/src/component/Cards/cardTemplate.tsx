import React from 'react'
import {Card,Grid,Avatar,Typography,Divider} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from "@material-ui/core/styles";

const useStyles=makeStyles({
    subTitle:{
        fontSize:'12px'
    },
    divider: {
        height: 50,
        margin: 4,
      },
})
export default function CardTemplate() {
    const classes=useStyles();
    return (
       <Card style={{padding:"15px"}}>
        <ClearIcon style={{float:"right",color:"red",fontSize:"12px"}}></ClearIcon>
       <Grid container direction="column"  >
         
           <Grid item>
            <Grid container spacing={2}>
                <Grid item >
                    <Avatar alt="dilip" src={require('../../Assets/images/logo design.jpg')} style={{height:"70px",width:"70px"}}></Avatar>
                </Grid>
                <Grid item>
                <Typography variant="body1">Dilip Kumar</Typography>
                <Typography variant="subtitle1" color="textSecondary" className={classes.subTitle}>Month,2020</Typography>
                </Grid>
            </Grid>

           </Grid>
           <br></br>
           <Grid item>
               <Grid container direction="row" spacing={1}>
                   <Grid item><Typography variant="subtitle1">Followers</Typography>
                   <Typography variant="subtitle2">15+</Typography></Grid>
                   <Divider className={classes.divider} orientation="vertical" />
                   <Grid item><Typography variant="subtitle1">Repositories</Typography>
                   <Typography variant="subtitle2">15+</Typography></Grid>
                   <Divider className={classes.divider} orientation="vertical" />
                   <Grid item><Typography variant="subtitle1">Public gists</Typography>
                   <Typography variant="subtitle2">40+</Typography></Grid>
               </Grid>
               
           </Grid>
       </Grid>
       </Card>
    )
}
