import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
    marginBottom: "-50px",
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginBottom: "0px",
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  title: {
    marginTop: "50px",
    color: "#021744"
  },
  para: {
    fontSize: "15px",
    fontWeight: "500",
    justifyContent: "center",
    letterSpacing: "0.1px",
    color: "#000000"
  },
  exploreButton: {
    textTransform: "none",
    borderRadius: "20px",
    width: "150px",
    backgroundColor: "#64BA02",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#64BA02",
      border: "1px solid #64BA02"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px"
    }
  },
  image: {
    width: "250px",
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "250px",
      height: "250px"
    }
  }
}));
