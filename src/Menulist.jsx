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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuListData from "./Resources/MenuList.json";
import * as Icons from "@mui/icons-material";

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
        <TextField id="standard-basic" label="Search" variant="outlined" size="small" />
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List component="nav">
        {MenuListData.menu.map((item) => {
          const IconComponent = Icons[item.icon];
          return (
            <React.Fragment key={item.index}>
              <ListItemButton
                selected={selectedIndex === item.index}
                onClick={() => !!item.path ? handleNavigation(item.path, item.index) : handleNestedClick(item.index)}
              >
                <ListItemIcon>{IconComponent && <IconComponent />}</ListItemIcon>
                <ListItemText primary={item.title} />
                {item.subMenu && (nestedOpen[item.index] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
              {item.subMenu && (
                <Collapse in={nestedOpen[item.index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subMenu.map((subItem) => {
                      const SubIconComponent = Icons[subItem.icon];
                      return (
                        <ListItemButton
                          key={subItem.index}
                          sx={{ pl: 4 }}
                          selected={selectedIndex === subItem.index}
                          onClick={() => handleNavigation(subItem.path, subItem.index)}
                        >
                          <ListItemIcon>{SubIconComponent && <SubIconComponent />}</ListItemIcon>
                          <ListItemText primary={subItem.title} />
                        </ListItemButton>
                      )
                    })}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          )
        })}
      </List>
      <Divider />
    </Drawer>
  );
};

export default MenuList;
