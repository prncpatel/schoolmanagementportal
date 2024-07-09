import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardCustomizeSharpIcon from "@mui/icons-material/DashboardCustomizeSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import PersonAddAlt1SharpIcon from "@mui/icons-material/PersonAddAlt1Sharp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ThreePIcon from "@mui/icons-material/ThreeP";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import FactCheckSharpIcon from "@mui/icons-material/FactCheckSharp";
import CategoryIcon from "@mui/icons-material/Category";
import DetailsIcon from "@mui/icons-material/Details";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
  overflowX: "hidden",
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const MenuList = ({
  open,
  handleDrawerClose,
  selectedIndex,
  handleListItemClick,
  nestedOpen,
  handleNestedClick,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigation = (path, index) => {
    navigate(path);
    handleListItemClick(null, index);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <TextField
          id="standard-basic"
          label="Search"
          variant="outlined"
          size="small"
        />
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List component="nav">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => handleNavigation("/", 0)}
        >
          <ListItemIcon>
            <DashboardCustomizeSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={handleNestedClick}
        >
          <ListItemIcon>
            <SchoolSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Students" />
          {nestedOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={selectedIndex === 3}
              onClick={() => handleNavigation("/add-student", 3)}
            >
              <ListItemIcon>
                <PersonAddAlt1SharpIcon />
              </ListItemIcon>
              <ListItemText primary="Add Student" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={selectedIndex === 4}
              onClick={() => handleNavigation("/student-category", 4)}
            >
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Student Category" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={selectedIndex === 5}
              onClick={() => handleNavigation("/student-list", 5)}
            >
              <ListItemIcon>
                <FactCheckSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Student List" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={selectedIndex === 9}
              onClick={() => handleNavigation("/student-details", 9)}
            >
              <ListItemIcon>
                <DetailsIcon />
              </ListItemIcon>
              <ListItemText primary="Student Details" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={handleNestedClick}
        >
          <ListItemIcon>
            <ThreePIcon />
          </ListItemIcon>
          <ListItemText primary="Communicate" />
          {nestedOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={selectedIndex === 7}
              onClick={() => handleNavigation("/notice-board", 7)}
            >
              <ListItemIcon>
                <PendingActionsIcon />
              </ListItemIcon>
              <ListItemText primary="Notice Board" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={selectedIndex === 8}
              onClick={() => handleNavigation("/add-notice", 8)}
            >
              <ListItemIcon>
                <NoteAltIcon />
              </ListItemIcon>
              <ListItemText primary="Add Notice" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
    </Drawer>
  );
};

export default MenuList;
