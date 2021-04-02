import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import TastyFood from "../TastyFood/TastyFood";
import HowItWorks from "../HowItWorks/HowItWorks";
import GetApp from "../GetApp/GetApp";
import AboutUs from "../AboutUs/AboutUs";
import Reasons from "../Reasons/Reasons";
import LatestNews from "../LatestNews/LatestNews";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Navbar />
          <MobileNavbar />
          <Hero />
          <Features />
          <TastyFood />
          <HowItWorks />
          <GetApp />
          <AboutUs />
          <Reasons />
          <LatestNews />
          <Contact />
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
