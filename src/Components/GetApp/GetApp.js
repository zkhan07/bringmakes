import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { HashLink as Link } from "react-router-hash-link";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} id="getApp">
        <Grid item xs={12}>
          <div
            className={classes.getAppContainer}
            style={{ overflowX: "hidden" }}
          >
            <br />
            <h2
              className={classes.title}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Download the app now
            </h2>

            <div className={classes.flexContainer}>
              <a
                data-aos="fade-right"
                data-aos-duration="2000"
                // target="_blank"
                href="#"
              >
                <img
                  className={classes.googlePlayImg}
                  src={require("../../assets/images/googlePlay.png")}
                />
              </a>
              <a
                data-aos="fade-right"
                data-aos-duration="2000"
                // target="_blank"
                href="#"
              >
                <img
                  className={classes.appleStoreImg}
                  src={require("../../assets/images/appleStore.png")}
                />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
