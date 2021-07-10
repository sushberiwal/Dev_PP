import React from "react";
import { Container, Grid, Paper, makeStyles, Button } from "@material-ui/core";

const Grids = () => {
  let useStyles = makeStyles({
    size: {
      height: "20vh",
      backgroundColor: "lightgray",
    },
    color: { color: "lightgreen" },
  });
  let classes = useStyles();
  // xs , sm , md , lg
  return (
    <div>
        <Grid container spacing={5}>
          <Grid item xs={5} sm={2} md={5}>
            <Paper className={[classes.size , classes.color]}>Item 1</Paper>
          </Grid>
          <Grid item xs={5} sm={2} md={5}>
            <Paper className={classes.size}>Item 2</Paper>
          </Grid>
          <Grid item xs={5} sm={8} md={2}>
            <Paper className={classes.size}>Item 3</Paper>
          </Grid>
        </Grid>
    </div>
  );
};

export default Grids;
