// src/components/Dashboard.js

import React from "react";
import { Typography, Box, Grid, Stack } from "@mui/material";
import DashboardBoxes from "./DashboardBoxes";
import DashboardCalendar from "./DashboardCalendar";
import "./CalenderComponents/Calender.css";
import ToDoList from "./DashboardToDoList";
import DashboardNoticeBoard from "./DashboardNoticeBoard";

// Sample notices data
const notices = [
  { date: "2nd Jul, 2024", title: "Exams", description: "Details about the exams." },
  // Add more notices as needed
];

function Dashboard() {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Dashboard
      </Typography>
      <Box
        boxShadow="0px 3px 5px 0px rgba(0,0,0,0.1), 0px -1px 2px 0px rgba(0,0,0,0.1)"
        p={3}
      >
        <DashboardBoxes />
      </Box>
      <Stack mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              boxShadow="0px 3px 5px 0px rgba(0,0,0,0.1), 0px -1px 2px 0px rgba(0,0,0,0.1)"
              p={3}
              height="100%"
            >
              <DashboardNoticeBoard notices={notices}/> 
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              boxShadow="0px 3px 5px 0px rgba(0,0,0,0.1), 0px -1px 2px 0px rgba(0,0,0,0.1)"
              p={0}
            >
              <DashboardCalendar />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              boxShadow="0px 3px 5px 0px rgba(0,0,0,0.1), 0px -1px 2px 0px rgba(0,0,0,0.1)"
              p={0}
            >
              <ToDoList />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}

export default Dashboard;
