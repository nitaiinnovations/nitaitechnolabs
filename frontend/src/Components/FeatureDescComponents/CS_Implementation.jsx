import { Box, Divider, Typography } from "@mui/material";
import React from "react";

function CS_Implementation() {
  return (
    <Box>
      <Typography
        variant="p"
        sx={{
          marginTop: "2rem",
          textAlign: "start",
        }}
      >
        Four stages should be used to implement the information security
        culture. They are:
      </Typography>
      <Box sx={{ paddingLeft: { xs: "1rem", md: "5rem" }, marginTop: "1rem" }}>
        <ul>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" sx={{ marginLeft: "-2rem" }}>
              Commitment of the management
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" sx={{ marginLeft: "-2rem" }}>
              Communication with organizational members
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" sx={{ marginLeft: "-2rem" }}>
              Courses for all organizational members
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="p" sx={{ marginLeft: "-2rem" }}>
              Commitment of the employees
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default CS_Implementation;
