import React from "react";
import { Element } from "react-scroll";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "../Styles/aboutUsComp.css";

function AboutUsComp() {
  return (
    <Element name="aboutUsSection">
      <div className="aboutUsComp">
        <div className="leftAboutUs">
          <Typography
            variant="h1"
            color="text.primary"
            sx={{ textAlign: "center", marginBottom: "2rem" }}
          >
            About Us
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            variant="h2"
            sx={{
              alignSelf: "center",
              fontFamily: "Tinos",
            }}
          >
            At NITAI TECHNOLOGICAL TRAINING INSTITUTE, we are dedicated to
            providing exceptional software training to individuals who are eager
            to enhance their skills and launch a successful career in the
            ever-evolving field of technology.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Link to="/aboutus">
              <Button variant="outlined">Know more</Button>
            </Link>
          </Box>
        </div>
        <div className="rightAboutUs">
          <img className="aboutUsImage" src="/images/aboutUs.png" alt="" />
        </div>
      </div>
    </Element>
  );
}

export default AboutUsComp;
