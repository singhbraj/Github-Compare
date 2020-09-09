import React from 'react'
import {Grid,Typography} from '@material-ui/core' 
import { makeStyles } from "@material-ui/core/styles";
const useStyles=makeStyles({
    imageConfig:{
        width:"150px",
        height:"150px"
    },
    parentContainer:{
        margin:"90px"
    }
})
export default function EmptyState() {
    const classes=useStyles();
    return (
       <Grid container className={classes.parentContainer} direction="column" alignItems="center">
           <Grid item ><Typography variant="body1">You haven't added anything yet</Typography></Grid>
            <Grid item>
                <img src={require('../../Assets/images/logo design.jpg')} className={classes.imageConfig}/>
            </Grid>
       </Grid>
    )
}
