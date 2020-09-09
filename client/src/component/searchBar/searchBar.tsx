import React,{useState} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Axios from 'axios';
import FormControl from "@material-ui/core/FormControl";
import Cards from '../MainContent/cardList';
import EmptyState from '../MainContent/emptyState';
import CircularProgress from '@material-ui/core/CircularProgress';
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(4),
  },
  withoutLabel: {
    marginTop: theme.spacing(8),
  },
  textField: {
    width: "70ch",
  },
  footerImage: {
    width: "150px",
    height: "150px",
    position: "absolute",
    bottom: "0px",
    left: "0px",
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [searchQuery,setSearchQuery]=useState({
      data:''
  });
  const [loading,setLoading]=useState(false);
  const changeHandler=(e:any)=>{
     setSearchQuery({
        data:e.target.value
     })
  }

    const fetchUserDataHandler=()=>{
        setLoading(true);
        Axios.get(`https://api.github.com/users/${searchQuery.data}`).then((response)=>{
            console.log(response.data);
            setLoading(false);
        })
    }


  return (
    <Grid container>
      <Grid item>
        <div className={classes.root}>
          <div>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-basic">Search user</InputLabel>
              <OutlinedInput
                id="outlined-basic"
                onChange={changeHandler}
                endAdornment={
                  <InputAdornment position="end">
                    {loading?<CircularProgress></CircularProgress>:<IconButton edge="end" onClick={fetchUserDataHandler}>
                      <Search></Search>
                    </IconButton>}
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </div>
        </div>
      </Grid>
    <Grid item>
        <Cards></Cards>
    </Grid>
    </Grid>
  );
}
