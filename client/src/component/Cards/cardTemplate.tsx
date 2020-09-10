import React from "react";
import { Card, Grid, Avatar, Typography, Divider } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  subTitle: {
    fontSize: "12px",
  },
  divider: {
    height: 50,
    margin: 4,
  },
  cardConfig: {
    padding: "15px",
  },
  cardIcon: {
    float: "right",
    color: "red",
    cursor: "pointer",
    fontSize: "18px",
  },
});
export default function CardTemplate(props) {
  const classes = useStyles();
  return (
    <Card className={classes.cardConfig}>
      <ClearIcon
        className={classes.cardIcon}
        onClick={props.deleteHandler}
      ></ClearIcon>
      <Grid container direction="column">
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Avatar
                alt="dilip"
                src={props.avatar_url}
                style={{ height: "70px", width: "70px" }}
              ></Avatar>
            </Grid>
            <Grid item>
              <Typography variant="body1">{props.login}</Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                className={classes.subTitle}
              >
                {props.location}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <br></br>
        <Grid item>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <Typography variant="subtitle1">Followers</Typography>
              <Typography variant="subtitle2">{props.followers}</Typography>
            </Grid>
            <Divider className={classes.divider} orientation="vertical" />
            <Grid item>
              <Typography variant="subtitle1">Repositories</Typography>
              <Typography variant="subtitle2">{props.public_repos}</Typography>
            </Grid>
            <Divider className={classes.divider} orientation="vertical" />
            <Grid item>
              <Typography variant="subtitle1">Public gists</Typography>
              <Typography variant="subtitle2">{props.public_gists}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
