import { makeStyles, fade } from "@material-ui/core/styles";
import Image from "../../assets/images/getAppBgImg.svg";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "-8px",
    marginRight: "-8px",
    marginBottom: "-50px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-8px",
      marginRight: "-8px",
      marginBottom: "0px"
    }
  },
  getAppContainer: {
    height: "200px",
    width: "100%",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "170px"
    }
  },
  title: {
    textAlign: "center",
    fontWeight: "500",
    marginTop: "20px",
    color: "white",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      textAlign: "center",
      marginLeft: "0%",
      fontSize: "25px"
    }
  },
  googlePlayImg: {
    width: "160px",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "20px"
    }
  },
  appleStoreImg: {
    marginLeft: "20px",
    width: "160px",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      marginBottom: "20px"
    }
  },
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center"
    }
  },
  link: {
    textDecoration: "none"
  }
}));
