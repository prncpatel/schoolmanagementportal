import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MiniDrawer from './MainLayout';
import Theme from './Theme/Theme';
import Dashboard from './Dashboard/Dashboard';
import AddStudent from './Student/AddStudent';
import NoticeBoard from './Communicate/NoticeBoard';
import AddNotice from './Communicate/AddNotice';
import StudentCategory from './Student/StudentCategory';
import StudentList from './Student/StudentList';
import StudentDetails from './Student/StudentDetails';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MiniDrawer />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/add-student", element: <AddStudent /> },
        { path: "/student-category", element: <StudentCategory /> },
        { path: "/student-list", element: <StudentList /> },
        { path: "/notice-board", element: <NoticeBoard /> },
        { path: "/add-notice", element: <AddNotice /> },
        { path: "/student-details", element: <StudentDetails /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
