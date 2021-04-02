import { makeStyles, fade } from "@material-ui/core/styles";
import Image from "../../assets/images/heroBgImg.png";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "-8px",
    marginRight: "-8px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-8px",
      marginRight: "-8px",
      marginTop: "-100px",
      paddingTop: "100px"
    }
  },
  heroContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "60vh"
    }
  },
  heroImg: {
    position: "absolute",
    top: "20%",
    right: "10%",
    width: "320px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      top: "50%",
      left: "0",
      right: "0",
      width: "150px"
    }
  },
  leftLine: {
    marginLeft: "-30%",
    marginRight: "10px",
    marginTop: "30px",
    width: "100px",
    borderTop: "2px solid #fff",
    [theme.breakpoints.down("sm")]: {
      borderTop: "2px solid #fff",
      marginLeft: "0%"
    }
  },
  title: {
    fontSize: "20px"
  },
  heroSlogan: {
    textAlign: "left",
    color: "white",
    position: "absolute",
    top: "30%",
    left: "7%",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      top: "15%",
      left: "0",
      right: "0",
      fontSize: "35px"
    }
  },
  inputField: {
    flex: 1,
    height: "33px",
    borderRadius: "20px",
    backgroundColor: "#fff",
    width: "250px",
    border: "1px solid #FFAA00",
    outline: "0px",
    fontWeight: "bold",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "100px"
    }
  },
  buttonField: {
    height: "35px",
    marginLeft: "-30px",
    textTransform: "none",
    borderRadius: "20px",
    backgroundColor: "#FFAA00",
    color: "#fff",
    width: "120px",
    border: "3px solid #FFAA00",
    outline: "0px",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#FFAA00",
      color: "#fff"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px"
    }
  },
  flexContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10%",
      width: "80%"
    }
  },
  flexDiv: {
    display: "flex",
    justifyContent: "start"
  }
}));
