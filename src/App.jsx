import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import MyTableComponent from './Student/MyTableComponent';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <MiniDrawer>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/student-category" element={<StudentCategory />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path="/notice-board" element={<NoticeBoard />} />
            <Route path="/add-notice" element={<AddNotice />} />
            <Route path="/student-details" element={<StudentDetails />} />
            <Route path="/table-component" element={<MyTableComponent />} />
          </Routes>
        </MiniDrawer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
