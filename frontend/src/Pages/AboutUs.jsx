import { useEffect } from "react";
import "../Styles/index.css";

import { Box, Typography } from "@mui/material";
import Features from "../Components/Features";
import FeatureMainSection from "../Components/FeatureMainSection";
import DividerLine from "../Components/DividerLine";
import { AboutUsData } from "../Data/AboutUsData";

function AboutUs() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FeatureMainSection
        title="About Us"
        subTitle=""
        description="At our training institute, we offer a diverse range of programs to cater to various needs and interests. We are one of the institutes providing assistance and training over different technologies and domains and to different level of expertise candidates."
        imageURL="images/aboutUs.png"
      />

      <DividerLine />

      <Features number={true} data={AboutUsData} />

      <DividerLine />

      <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            width: {
              xs: "100%",
              md: "80%",
            },
            textAlign: "center",
            fontSize: "1.2rem",
            marginTop: "3rem !important",
          }}
        >
          At{" "}
          <Typography
            sx={{
              color: (theme) =>
                theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
            }}
          >
            NITAI TECHNOLOGICAL TRAINING INSTITUTE
          </Typography>
          we are committed to providing high-quality training, industry-relevant
          curriculum, experienced instructors, and a supportive learning
          environment. We strive to empower individuals with the knowledge and
          skills needed to succeed in their chosen fields.
        </Typography>
      </Box>
      <br />
    </>
  );
}

export default AboutUs;
