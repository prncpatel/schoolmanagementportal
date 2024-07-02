import React from "react";
import {
  ButtonGroup,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CalendarToolbar = ({ label, onNavigate, onView }) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavigation = (action, type) => {
    if (type === "navigate") {
      onNavigate(action);
    } else if (type === "view") {
      onView(action);
    }
  };

  return (
    <Box mb={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Calendar</Typography>
        <Typography variant="h6">{label}</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={isMediumScreen ? "column" : "row"}
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          size={isMediumScreen ? "small" : "medium"}
          style={{ marginBottom: isMediumScreen ? "10px" : "0" }}
        >
          <Button onClick={() => handleNavigation("month", "view")}>
            Month
          </Button>
          <Button onClick={() => handleNavigation("week", "view")}>Week</Button>
          <Button onClick={() => handleNavigation("day", "view")}>Day</Button>
          <Button onClick={() => handleNavigation("agenda", "view")}>
            Agenda
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          size={isMediumScreen ? "small" : "medium"}
        >
          <Button
            onClick={() => handleNavigation("PREV", "navigate")}
            aria-label="back"
          >
            <ArrowBackIcon fontSize="small" />
          </Button>
          <Button onClick={() => handleNavigation("TODAY", "navigate")}>
            Today
          </Button>
          <Button
            onClick={() => handleNavigation("NEXT", "navigate")}
            aria-label="next"
          >
            <ArrowForwardIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default CalendarToolbar;
