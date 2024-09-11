import "../Styles/index.css";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import DividerLine from "../Components/DividerLine";
import FeatureMainSection from "../Components/FeatureMainSection";
import Features from "../Components/Features";
import { CS_5stepsData } from "../Data/CS_5stepsData";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function CyberSecurity() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    textAlign: "start !important",
    alignItems: "flex-start !important",
    color: (theme) => (theme.palette.mode === "light" ? "black" : "white"),
    "&.Mui-selected": {
      color: (theme) =>
        theme.palette.mode === "light" ? "#0959AA" : "#50a3f7", // Active tab text color
    },
  };

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
        title="Cyber Security"
        subTitle=""
        description="A vulnerability is a weakness in the design, implementation, operation, or internal control of a computer or system. Most of the vulnerabilities that have been discovered are documented in the Common Vulnerability and Exposures (CVE) database. An exploitable vulnerability is one for which at least one working attack or exploit exists. Vulnerabilities can be researched, reverse-engineered, hunted, or exploited using automated tools or customized script."
        imageWidth="70%"
        imageURL="/images/cyberSecurity.jpg"
      />

      <Features number={true} data={CS_5stepsData} />
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
              Summarize the main purpose of cyber security as a discipline
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Summarize the basics of identification and authentication in cyber
              security
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Explain the pros and cons of security through obscurity
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" color="text.secondary">
              Develop a lifelong learning plan for potential careers in cyber
              security
            </Typography>
          </li>
        </ul>
      </Box>
    </>
  );
}

export default CyberSecurity;
