import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import MenuList from './Menulist';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MiniDrawer = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [nestedOpen, setNestedOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleNestedClick = (index) => {
    setNestedOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <MenuList
        open={open}
        handleDrawerClose={handleDrawerClose}
        selectedIndex={selectedIndex}
        handleListItemClick={handleListItemClick}
        nestedOpen={nestedOpen}
        handleNestedClick={handleNestedClick}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflow:'auto' }}>
        <DrawerHeader />
        <Outlet/>
      </Box>
    </Box>
  );
}

export default MiniDrawer;
