import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-100px",
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  leftLine: {
    marginLeft: "-10%",
    marginRight: "10px",
    marginTop: "107px",
    width: "9%",
    borderTop: "2px solid #64BA02"
  },
  heading: {
    paddingTop: "-100px",
    marginTop: "100px",
    fontWeight: "500",
    fontSize: "15px",
    color: "#64BA02"
  },
  title: {
    fontWeight: "500",
    color: "#021744",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px"
    }
  },
  para: {
    fontSize: "15px",
    fontWeight: "500",
    justifyContent: "center",
    letterSpacing: "0.1px",
    color: "#000000"
  },
  exploreButton: {
    marginTop: "20px",
    textTransform: "none",
    borderRadius: "20px",
    width: "200px",
    backgroundColor: "#64BA02",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#64BA02",
      border: "1px solid #64BA02"
    }
  },
  image: {
    width: "100%"
  },
  flexDiv: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "start"
  }
}));
