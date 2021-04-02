import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { HashLink as Link } from "react-router-hash-link";
import { useStyles } from "./css";

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.mobileView}>
      <div className={classes.root}>
        <AppBar
          style={{ boxShadow: "1px 1px 1px 1px #64BA02" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify="flex-start">
              <Link
                scroll={el =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                smooth={true}
                to="/#heroTop"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h2>BringMakes</h2>
                {/* <img
                  justify="flex-end"
                  className={classes.mobileLogo}
                  src={require("../../assets/images/logo.png")}
                /> */}
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          onEscapeKeyDown={handleDrawerClose}
          onBackdropClick={handleDrawerClose}
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon style={{ color: "#64BA02" }} />
              ) : (
                <ChevronRightIcon style={{ color: "#64BA02" }} />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              smooth={true}
              to="/#heroTop"
              style={{ textDecoration: "none", color: "#64BA02" }}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              smooth={true}
              to="/#featuresTop"
              style={{ textDecoration: "none", color: "#64BA02" }}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText primary="Features" />
              </ListItem>
            </Link>
            <Link
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              smooth={true}
              to="/#howItWorkTop"
              style={{ textDecoration: "none", color: "#64BA02" }}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText primary="How it works" />
              </ListItem>
            </Link>
            <Link
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              smooth={true}
              to="/#aboutTop"
              style={{ textDecoration: "none", color: "#64BA02" }}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            <Link
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              smooth={true}
              to="/#reasonsTop"
              style={{ textDecoration: "none", color: "#64BA02" }}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText primary="Reasons" />
              </ListItem>
            </Link>
            <Link
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              smooth={true}
              to="/#newsTop"
              style={{ textDecoration: "none", color: "#64BA02" }}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText primary="News" />
              </ListItem>
            </Link>
            <Link
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              smooth={true}
              to="/#contactTop"
              style={{ textDecoration: "none", color: "#64BA02" }}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
            <ListItem
              button
              className={classes.downloadButton}
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Download App" />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          {/* <div className={classes.drawerHeader} /> */}
        </main>
      </div>
    </div>
  );
}
