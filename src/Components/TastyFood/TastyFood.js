import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          backgroundColor: "#E1FEE1",
          marginLeft: "-8px",
          marginRight: "-8px"
        }}
      >
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img
                className={classes.image}
                src={require("../../assets/images/tastyFoodImg.png")}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <h2 className={classes.title}>Your tasty food details</h2>
              <p className={classes.para}>
                When I was a little kid, I used to help my mother in the
                kitchen. She would always make my favourite dishes. Watching her
                cook since I was a kid, made me want to try out. So here I am,
                after more than a decade, writing about what inspires me to cook
                and why I love cooking so much.
              </p>
              <Button className={classes.exploreButton}>Read more</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
