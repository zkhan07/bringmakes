import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="featuresTop">
        <div className={classes.flexDiv}>
          <div className={classes.leftLine}></div>
          <h1 className={classes.heading}>Features</h1>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 className={classes.title}>
              Arract Customers with <br /> Traditional Foods
            </h1>
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
            <Button className={classes.exploreButton}>Get in touch</Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid container>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <div className={classes.leftDiv}>
                  <img
                    className={classes.image1}
                    src={require("../../assets/images/featuresImg1.png")}
                  />
                  <img
                    className={classes.image2}
                    src={require("../../assets/images/featuresImg2.png")}
                  />
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <div className={classes.rightDiv}>
                  <img
                    className={classes.image3}
                    src={require("../../assets/images/featuresImg3.png")}
                  />
                  <img
                    className={classes.image4}
                    src={require("../../assets/images/featuresImg4.png")}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
