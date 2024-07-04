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

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <MiniDrawer>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/notice-board" element={<NoticeBoard />} />
            <Route path="/add-notice" element={<AddNotice />} />
          </Routes>
        </MiniDrawer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
