import "../Styles/index.css";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import DividerLine from "../Components/DividerLine";
import FeatureMainSection from "../Components/FeatureMainSection";

function SoftwareDevelopment() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "1rem",
    padding: { xs: "2rem 3rem", sm: "2rem 5rem" },
  };
  return (
    <>
      <FeatureMainSection
        title="Software Development"
        subTitle="About the course"
        description="This Full Stack Java Developer program will help you master both front-end and back-end Java technologies and accelerate your career as a Full Stack Software Developer. This course will expose you to basic and advanced concepts of web development. You will get hands-on experience with ReactJS, Spring Boot, Servlets, JSPs, web services, and other critical skills. You will learn how to use JavaScript, and Node.js to build dynamic and interactive websites; write APIs; build web applications using Java; test and deploy code using DevOps; store data using MongoDB; and much more. This course will help advance your career as a full stack developer and help you learn some of the most high-demand skills in the industry."
        imageWidth="70%"
        imageURL="/images/softwareDevelopment.png"
      />

      <DividerLine />
      <Box
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          padding: "1rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: (theme) =>
              theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
          }}
        >
          Program Outcome
        </Typography>
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
          At the end of this program, you will be able to Learn the fundamentals
          of software development to create outstanding apps Clone, then begin
          modifying a live repository Build scalable back-end infrastructure,
          Test features with minimal effort and deploy them seamlessly to
          production. Become an Agile practitioner with the capacity to join a
          project in progress in your sector rapidly and Create fantastic
          front-end features. Choose your own stack based on the delivery
          schedule and requirements. From scratch, create a functioning
          industrial application.
        </Typography>
      </Box>
      <DividerLine />
      <Box sx={boxStyle}>
        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: "center" },
            color: (theme) =>
              theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
          }}
        >
          What you'll learn here is
        </Typography>
        <ul
          style={{
            padding: ".5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Go from Zero skills to building Powerful Web Applications on a
              highly professional level using the latest Web Technologies.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Create real life mobile apps and upload them to the IOS App Store
              and Google Play.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Use HTML5, CSS3, Flexbox, Grid & SASS to build website content and
              add stunning styling and decoration.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Use Javascript, jQuery & jQuery User Interface to create
              Interactive Websites and Games.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Use Back End Technologies like NodeJS, PHP, AJAX, JSON to build
              dynamic database-driven websites.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Use advanced skills to connect your websites to APIs like Google
              Maps, Facebook, Google plus and Twitter.
            </Typography>
          </li>
        </ul>
      </Box>
    </>
  );
}

export default SoftwareDevelopment;
