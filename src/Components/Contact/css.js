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
    },
    "& label.Mui-focused": {
      color: "#00BBDC"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "lightgray"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lighgray"
      },
      "&:hover fieldset": {
        borderColor: "lightgray"
      },
      "&.Mui-focused fieldset": {
        borderColor: "lightgray"
      }
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
  label: {
    color: "black",
    fontWeight: "bold"
  },
  inputField: {
    width: "300px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  submitButton: {
    textTransform: "none",
    width: "200px",
    color: "white",
    backgroundColor: "#64BA02",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#64BA02",
      border: "1px solid #64BA02"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px"
    }
  },
  description: {
    marginTop: "-10px",
    color: "#696871"
  },
  flexDiv: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "start"
  }
}));
