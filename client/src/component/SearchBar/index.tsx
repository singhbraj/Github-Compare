import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Cards from "../MainContent/cardList";
import EmptyState from "../MainContent/emptyState";
import CircularProgress from "@material-ui/core/CircularProgress";
import Search from "@material-ui/icons/Search";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../../action/dataListAction";
import _ from "lodash";

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
  const dispatch = useDispatch();
  const dataList = useSelector((store: any) => store.Data);
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState({
    data: "",
  });

  const changeHandler = (e: any) => {
    setSearchQuery({
      data: e.target.value,
    });
  };

  const fetchUserDataHandler = () => {
    dispatch(fetchDetails(searchQuery.data));
  };
  const keyEventHandler = (e: any) => {
    if (e.keyCode === 13) {
      dispatch(fetchDetails(searchQuery.data));
    }
  };
  let dataToBeRender = _.sortBy(dataList.data, "followers").reverse();
  dataToBeRender = _.uniqBy(dataToBeRender, "login");
  return (
    <>
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
                  error={dataList.error.message ? true : false}
                  id="outlined-basic"
                  onChange={changeHandler}
                  onKeyDown={keyEventHandler}
                  endAdornment={
                    <InputAdornment position="end">
                      {dataList.loading ? (
                        <CircularProgress></CircularProgress>
                      ) : (
                        <IconButton edge="end" onClick={fetchUserDataHandler}>
                          <Search></Search>
                        </IconButton>
                      )}
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
                {dataList.error && dataList.error.message && (
                  <span style={{ color: "red" }}>
                    There exist no user with username {searchQuery.data}
                  </span>
                )}
              </FormControl>
            </div>
          </div>
        </Grid>
      </Grid>
      {dataToBeRender.length<=0 && <EmptyState></EmptyState>}
      <Cards data={dataToBeRender} ></Cards>
    </>
  );
}
