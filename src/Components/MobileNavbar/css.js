import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 220;

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#64BA02"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
    // backgroundColor:'#00BBDC'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#fff"
    // backgroundImage: require("../../assets/images/heroImg.svg")
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  listBtn: {
    color: "#64BA02"
  },
  downloadButton: {
    backgroundColor: "#FFAA00",
    color: "#fff",
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  mobileView: {
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  mobileLogo: {
    width: "70px",
    height: "45px",
    padding: "5px"
  }
}));
