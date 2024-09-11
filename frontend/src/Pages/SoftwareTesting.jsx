import "../Styles/index.css";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import DividerLine from "../Components/DividerLine";
import FeatureMainSection from "../Components/FeatureMainSection";

function SoftwareTesting() {
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
        title="Software Testing"
        subTitle="This is the course that covers everything that you need to know about software Testing in the IT industry or everything any software tester should be aware of."
        description=" In this course you will learn all the fundamentals that you need to know
        about Software Testing from basics to more advanced concepts, so by the
        end of the course you will have a thorough idea of what actual software
        testing is and how software testing is carried out in the Real life IT
        projects."
        imageWidth="70%"
        imageURL="/images/softwareTesting.png"
      />

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
              Crystal clear understanding on how Software Projects are handled
              in real time with Live examples.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              In Depth understanding of current Software Testing methodologies
              with Manual testing tools followed in the Industry.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Understand JIRA (Project management tool) and Tester activities in
              the Jira from Scratch.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Thorough knowledge on latest Practices like Agile scrum, SDLC,
              Testdriven, Behaviour driven approaches.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              In Depth knowledge on writing test cases in Jira using Xray app on
              Live Project.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Strong exposure on designing test cases and defect life cycle
              process.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Complete knowledge on QA process starting from requirement
              gathering to Project delivery.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Testing types and their real time usages in Projects at different
              stages.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Top 50 Frequently asked Software testing Interview questions with
              Solutions.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Basic knowledge of SQL.
            </Typography>
          </li>
        </ul>
      </Box>
    </>
  );
}

export default SoftwareTesting;
