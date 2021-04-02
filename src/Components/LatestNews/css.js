import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "-50px",
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
  name: {
    color: "#212529"
  },
  description: {
    fontWeight: "500",
    color: "#545454",
    marginTop: "-10px",
    fontSize: "12px"
  },
  readButton: {
    fontSize: "13px",
    textTransform: "none",
    color: "#FFAA00"
  },
  image: {
    width: "100%",
    height: "150px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100px"
    }
  },
  flexDiv: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "start"
  }
}));
