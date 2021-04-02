import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";
import { Divider } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} className={classes.footerContainer}>
            <Grid container className={classes.mainDiv}>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <h2 align="center">BringMakes</h2>
                <p className={classes.footerList} align="center">
                  They are many variations of pass ages <br />
                  They are many variations of pass ages
                </p>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg>
                <h4 className={classes.header}>Shop</h4>
                <div className={classes.footerList}>
                  <Link smooth={true} to="/#homePage" className={classes.link}>
                    <p className={classes.listItem}>Menu</p>
                  </Link>
                  <Link smooth={true} to="/#howItWork" className={classes.link}>
                    <p className={classes.listItem}>Orange Jose</p>
                  </Link>
                  <Link smooth={true} to="/#getApp" className={classes.link}>
                    <p className={classes.listItem}>Download app</p>
                  </Link>
                  <Link smooth={true} to="/#solutions" className={classes.link}>
                    <p className={classes.listItem}>Solutions</p>
                  </Link>
                  <Link smooth={true} to="/#otoMedia" className={classes.link}>
                    <p className={classes.listItem}>Media</p>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg>
                <h4 className={classes.header}>Service</h4>
                <div className={classes.footerList}>
                  <Link smooth={true} to="/#solutions" className={classes.link}>
                    <p className={classes.listItem}>Strawberry Jose</p>
                  </Link>
                  <Link smooth={true} to="/#solutions" className={classes.link}>
                    <p className={classes.listItem}>Share Parking and Earn</p>
                  </Link>
                  <Link smooth={true} to="/#solutions" className={classes.link}>
                    <p className={classes.listItem}>Find Parking</p>
                  </Link>
                  <Link smooth={true} to="/#solutions" className={classes.link}>
                    <p className={classes.listItem}>Parking Technologies</p>
                  </Link>
                  <Link smooth={true} to="/#solutions" className={classes.link}>
                    <p className={classes.listItem}>Parking Services</p>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg>
                <h4 className={classes.header}>Subscribe</h4>
                <div className={classes.flexContainer}>
                  <TextField
                    className={classes.inputField}
                    placeholder="type your email"
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <ArrowRightAltIcon
                            style={{
                              backgroundColor: "#64BA02",
                              color: "black",
                              padding: "5px"
                            }}
                          />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </Grid>
            </Grid>

            <div className={classes.bottomDiv}>
              <Grid container>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                  <div className={classes.bottomText}>
                    All rights reserved by BringMakes pvt.ltd
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
