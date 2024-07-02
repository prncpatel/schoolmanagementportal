import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import dashboardBoxesData from "./utils/DashboardBoxesData";

function DashboardBoxes() {
  return (
    <Grid container spacing={3}>
      {dashboardBoxesData?.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            elevation={0}
            style={{
              background: `linear-gradient(45deg, ${item.colors.join(",")})`,
              padding: "10px",
              height:'100%'
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="subtitle1">{item.subtitle}</Typography>
                <Typography variant="h4">{item.count}</Typography>
              </div>
              <img
                src={item.logo}
                alt={`${item.name} Logo`}
                style={{ width: "45px", height: "45px" }}
              />
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardBoxes;
