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
  para: {
    fontSize: "15px",
    fontWeight: "500",
    justifyContent: "center",
    letterSpacing: "0.1px",
    color: "#000000"
  },
  name: {
    textAlign: "center",
    color: "#212529"
  },
  description: {
    textAlign: "center",
    fontWeight: "500",
    color: "#545454",
    marginTop: "-5px",
    fontSize: "12px"
  },
  cardContainer: {
    marginTop: "50px",
    padding: "30px",
    borderRadius: "5px",
    backgroundColor: "#F8FBF5",
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "2px 2px 2px 2px #00000014",
      borderBottom: "3px solid #639D2B"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px"
    }
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50px",
    height: "50px"
  },
  flexDiv: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "start"
  }
}));
