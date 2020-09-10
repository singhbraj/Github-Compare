import React from "react";
import CardTemplate from "../Cards/cardTemplate";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../action/dataListAction";
export default function CardList(props) {
  const dispatch = useDispatch();
  const deleteHandler = (id: number) => {
    dispatch(deleteUser(id));
  };
  return (
    <Grid
      container
      direction="row"
      md={12}
      spacing={2}
      style={{ margin: "0px 15px" }}
      alignItems="center"
    >
      {props.data.length > 0 &&
        props.data.map((node) => {
          return (
            <Grid item md={5}>
              <CardTemplate
                avatar_url={node.avatar_url}
                public_gists={node.public_gists}
                public_repos={node.public_repos}
                followers={node.followers}
                login={node.login}
                location={node.location}
                deleteHandler={() => deleteHandler(node.id)}
              ></CardTemplate>
            </Grid>
          );
        })}
    </Grid>
  );
}
