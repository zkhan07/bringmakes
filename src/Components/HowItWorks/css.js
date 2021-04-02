import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
    marginBottom: "50px",
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
    color: "#021744",
    fontSize: "30px",
    fontWeight: "500",
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
    marginLeft: "30px",
    color: "#021744",
    fontSize: "20px",
    fontWeight: "500"
  },
  description: {
    marginLeft: "30px",
    marginTop: "-15px",
    color: "#727272",
    fontSize: "13px"
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "200px",
    height: "70vh",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "200px",
      height: "60vh"
    }
  },
  imageIcon: {
    marginTop: "10px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "20%"
    }
  },
  flexDiv: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "start"
  },
  flexContainer: {
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: "#E1FEE1",
      borderRadius: "50px"
    }
  },
  flexContainer1: {
    marginLeft: "40px",
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: "#E1FEE1",
      borderRadius: "50px"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px"
    }
  },
  flexContainer2: {
    marginLeft: "80px",
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: "#E1FEE1",
      borderRadius: "50px"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px"
    }
  }
}));
