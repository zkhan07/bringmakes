import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { HashLink as Link } from "react-router-hash-link";
import { useStyles } from "./css";

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.desktopView}>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          style={{ boxShadow: "1px 1px 1px 1px #64BA02" }}
        >
          <Toolbar className={classes.navbarContainer}>
            <div>
              <Link
                smooth={true}
                to="/#heroTop"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h2>BringMakes</h2>
              </Link>
            </div>
            <div>
              <Link
                smooth={true}
                to="/#heroTop"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className={classes.navbarButton} color="inherit">
                  Home
                </Button>
              </Link>
              <Link
                smooth={true}
                to="/#featuresTop"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className={classes.navbarButton} color="inherit">
                  Features
                </Button>
              </Link>
              <Link
                smooth={true}
                to="/#howItWorkTop"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className={classes.navbarButton} color="inherit">
                  How it works
                </Button>
              </Link>
              <Link
                smooth={true}
                to="/#aboutTop"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className={classes.navbarButton} color="inherit">
                  About
                </Button>
              </Link>
              <Link
                smooth={true}
                to="/#reasonsTop"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className={classes.navbarButton} color="inherit">
                  Reasons
                </Button>
              </Link>
              <Link
                smooth={true}
                to="/#newsTop"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className={classes.navbarButton} color="inherit">
                  News
                </Button>
              </Link>
              <Link
                smooth={true}
                to="/#contactTop"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className={classes.navbarButton} color="inherit">
                  Contact
                </Button>
              </Link>
              <Button className={classes.downloadButton} color="inherit">
                Download App
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
