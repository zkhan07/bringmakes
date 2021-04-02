import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="howItWorkTop">
        <div className={classes.flexDiv}>
          <div className={classes.leftLine}></div>
          <h1 className={classes.heading}>How it works?</h1>
        </div>
        <h2 className={classes.title}>Simple & Easy to use</h2>
        <p className={classes.para}>
          When I was a little kid, I used to help my mother in the kitchen.{" "}
          <br />
          She would always make my favourite dishes. Watching her cook
        </p>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              className={classes.image}
              src={require("../../assets/images/workPhoneImg.png")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className={classes.flexContainer}>
              <img
                className={classes.imageIcon}
                src={require("../../assets/icons/workIcon1.svg")}
                onMouseOver={e =>
                  (e.currentTarget.src = require("../../assets/icons/workGreenIcon1.svg"))
                }
                onMouseOut={e =>
                  (e.currentTarget.src = require("../../assets/icons/workIcon1.svg"))
                }
              />
              <div>
                <h2 className={classes.name}>Find your food</h2>
                <p className={classes.description}>
                  The one the what walk the would always make my favourite
                  dishes. Watching her cook since
                </p>
              </div>
            </div>
            <div className={classes.flexContainer1}>
              <img
                className={classes.imageIcon}
                src={require("../../assets/icons/workIcon2.svg")}
                onMouseOver={e =>
                  (e.currentTarget.src = require("../../assets/icons/workGreenIcon2.svg"))
                }
                onMouseOut={e =>
                  (e.currentTarget.src = require("../../assets/icons/workIcon2.svg"))
                }
              />
              <div>
                <h2 className={classes.name}>Add to basket</h2>
                <p className={classes.description}>
                  The one the what walk the would always make my favourite
                  dishes. Watching her cook since
                </p>
              </div>
            </div>
            <div className={classes.flexContainer2}>
              <img
                className={classes.imageIcon}
                src={require("../../assets/icons/workIcon3.svg")}
                onMouseOver={e =>
                  (e.currentTarget.src = require("../../assets/icons/workGreenIcon3.svg"))
                }
                onMouseOut={e =>
                  (e.currentTarget.src = require("../../assets/icons/workIcon3.svg"))
                }
              />
              <div>
                <h2 className={classes.name}>Purchase your food</h2>
                <p className={classes.description}>
                  The one the what walk the would always make my favourite
                  dishes. Watching her cook since
                </p>
              </div>
            </div>
            <div className={classes.flexContainer1}>
              <img
                className={classes.imageIcon}
                src={require("../../assets/icons/workIcon4.svg")}
                onMouseOver={e =>
                  (e.currentTarget.src = require("../../assets/icons/workGreenIcon4.svg"))
                }
                onMouseOut={e =>
                  (e.currentTarget.src = require("../../assets/icons/workIcon4.svg"))
                }
              />
              <div>
                <h2 className={classes.name}>Add delivery details</h2>
                <p className={classes.description}>
                  The one the what walk the would always make my favourite
                  dishes. Watching her cook since
                </p>
              </div>
            </div>
            <div className={classes.flexContainer}>
              <img
                className={classes.imageIcon}
                src={require("../../assets/icons/workIcon5.svg")}
                onMouseOver={e =>
                  (e.currentTarget.src = require("../../assets/icons/workGreenIcon5.svg"))
                }
                onMouseOut={e =>
                  (e.currentTarget.src = require("../../assets/icons/workIcon5.svg"))
                }
              />
              <div>
                <h2 className={classes.name}>Track your order</h2>
                <p className={classes.description}>
                  The one the what walk the would always make my favourite
                  dishes. Watching her cook since
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
