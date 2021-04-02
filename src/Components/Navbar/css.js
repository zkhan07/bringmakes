import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "-10px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  navbarContainer: {
    marginLeft: "-8px",
    marginRight: "-8px",
    backgroundColor: "#64BA02",
    display: "flex",
    justifyContent: "space-between"
  },
  navbarImage: {
    width: "80px",
    heigh: "80px",
    padding: "10px"
  },
  navbarButton: {
    marginRight: "30px",
    textTransform: "none",
    borderRadius: "20px",
    outerline: "0px",
    "&:hover": {
      backgroundColor: "#FFAA00",
      color: "#fff",
      borderRadius: "20px"
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "20px"
    }
  },
  downloadButton: {
    backgroundColor: "#FFAA00",
    width: "150px",
    marginRight: "30px",
    textTransform: "none",
    borderRadius: "20px",
    outerline: "0px",
    "&:hover": {
      backgroundColor: "#FFAA00",
      color: "#fff",
      borderRadius: "20px"
    }
  },
  desktopView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  btn: {
    textDecoration: "none",
    color: "white"
  }
}));
