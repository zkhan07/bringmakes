import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import NearMeIcon from "@material-ui/icons/NearMe";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="heroTop">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.heroContainer}>
            <img
              className={classes.heroImg}
              src={require("../../assets/images/heroMobileImg.png")}
            />
            <div
              className={classes.heroSlogan}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className={classes.flexDiv}>
                <div className={classes.leftLine}></div>
                <p className={classes.title}>Are you hungry?</p>
              </div>
              <p style={{ marginTop: "-5px" }}>
                Discover healthy and <br />
                Natural Food
              </p>
              <div className={classes.flexContainer}>
                <TextField
                  className={classes.inputField}
                  placeholder="type your location"
                  // InputProps={{ disableUnderline: true }}
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <NearMeIcon
                          style={{
                            color: "#707070",
                            padding: "10px"
                          }}
                        />
                      </InputAdornment>
                    )
                  }}
                />
                <Button className={classes.buttonField}>Find Food</Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
