import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="reasonsTop">
        <div className={classes.flexDiv}>
          <div className={classes.leftLine}></div>
          <h1 className={classes.heading}>Reasons</h1>
        </div>
        <h1 className={classes.title}>Why Choose Us?</h1>
        <p className={classes.para}>
          When I was a little kid, I used to help my mother kitchen. She would
          always make dishes. <br />
          this is Watching her cook since I was a kid, made me want to try out.
          So here I am, <br />
          after more than a decade, about what inspires cook and why I love
          cooking so much. <br />
          There are so many different types of food belonging to different
        </p>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className={classes.cardContainer}>
              <img
                className={classes.image}
                src={require("../../assets/images/reasonsImg1.svg")}
              />
              <h4 className={classes.name}>Various Menus</h4>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className={classes.cardContainer}>
              <img
                className={classes.image}
                src={require("../../assets/images/reasonsImg2.svg")}
              />
              <h4 className={classes.name}>Pocket friendly Delivery</h4>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className={classes.cardContainer}>
              <img
                className={classes.image}
                src={require("../../assets/images/reasonsImg3.svg")}
              />
              <h4 className={classes.name}>Best Offers</h4>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className={classes.cardContainer}>
              <img
                className={classes.image}
                src={require("../../assets/images/reasonsImg4.svg")}
              />
              <h4 className={classes.name}>Best Offers</h4>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
              <p className={classes.description}>
                Quickly of preorders and standards
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
