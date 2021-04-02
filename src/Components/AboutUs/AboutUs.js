import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="aboutTop">
        <div className={classes.flexDiv}>
          <div className={classes.leftLine}></div>
          <h1 className={classes.heading}>About us</h1>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 className={classes.title}>Simple & Easy to use</h1>
            <p className={classes.para}>
              When I was a little kid, I used to help my mother in the kitchen.
              She would always make my favourite dishes. Watching her cook since
              I was a kid, made me want to try out. So here I am, after more
              than a decade, writing about what inspires me to cook and why I
              love cooking so much. There are so many different types of food
              belonging to different cuisines all over the world. Many different
              recipes are available online for every one to download and share
              as well.
            </p>
            <p className={classes.para}>
              When I was a little kid, I used to help my mother in the kitchen.
              She would always make my favourite dishes. Watching her cook since
              I was a kid, made me want to try out. So here I am, after more
              than a decade, writing about what inspires me to cook and why I
              love cooking so much. There are so many different types of food
              belonging to different cuisines all over the world. Many different
              recipes are available online for every one to download and share
              as well.
            </p>
            <Button className={classes.exploreButton}>Explore our story</Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              className={classes.image}
              src={require("../../assets/images/aboutUs.png")}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
