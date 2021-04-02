import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="newsTop">
        <div className={classes.flexDiv}>
          <div className={classes.leftLine}></div>
          <h1 className={classes.heading}>News</h1>
        </div>
        <h1 className={classes.title}>Latest News</h1>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <img
              className={classes.image}
              src={require("../../assets/images/newImg1.png")}
            />
            <h4 className={classes.name}>Spain Appetizer</h4>
            <p className={classes.description}>
              Quickly of preorders and standards complaints and more vegetable
            </p>
            <a className={classes.readButton}>Read more</a>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <img
              className={classes.image}
              src={require("../../assets/images/newImg1.png")}
            />
            <h4 className={classes.name}>Spain Appetizer</h4>
            <p className={classes.description}>
              Quickly of preorders and standards complaints and more vegetable
            </p>
            <a className={classes.readButton}>Read more</a>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <img
              className={classes.image}
              src={require("../../assets/images/newImg1.png")}
            />
            <h4 className={classes.name}>Spain Appetizer</h4>
            <p className={classes.description}>
              Quickly of preorders and standards complaints and more vegetable
            </p>
            <a className={classes.readButton}>Read more</a>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <img
              className={classes.image}
              src={require("../../assets/images/newImg1.png")}
            />
            <h4 className={classes.name}>Spain Appetizer</h4>
            <p className={classes.description}>
              Quickly of preorders and standards complaints and more vegetable
            </p>
            <a className={classes.readButton}>Read more</a>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
