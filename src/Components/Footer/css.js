import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  mainDiv: {
    marginTop: "50px",
    marginBottom: "50px"
  },
  footerContainer: {
    marginBottom: "-20px",
    backgroundColor: "#FBF9F7",
    color: "#707070",
    marginTop: "50px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px"
    }
  },
  logo: {
    width: "150px",
    height: "100px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  footerList: {
    fontSize: "15px"
  },
  footerDivider: {
    borderBottom: "5px solid white"
  },
  fabIcon: {
    border: "1px solid white",
    width: "20px",
    height: "20px",
    borderRadius: "50%"
  },
  bottomDiv: {
    marginBottom: "-20px",
    marginLeft: "-10px",
    marginRight: "-10px",
    backgroundColor: "#64BA02",
    color: "#fff",
    padding: "10px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      // marginLeft: "0px",
      // marginRight: "0px"
    }
  },
  header: {
    color: "#252429"
  },
  icon: {
    margin: "5px"
  },
  bottomText: {
    textAlign: "center",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
      marginLeft: "-10px"
    }
  },
  link: {
    textDecoration: "none",
    color: "#fff"
  },
  listItem: {
    color: "#707070",
    fontSize: "15px",
    "&:hover": {
      color: "black"
    }
  },
  inputField: {
    flex: 1,
    backgroundColor: "#fff",
    width: "70%",
    border: "1px solid #64BA02",
    outline: "0px",
    fontWeight: "bold",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "70%"
    }
  }
}));
