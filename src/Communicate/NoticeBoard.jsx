import React, { useState } from 'react';
import { Box, Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const AddNoticeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7a33ff", // your color
  color: "#fff",
  '&:hover': {
    backgroundColor: "#5a23cc", // darker shade of your color
  },
  marginLeft: 'auto',
}));

const NoticeBoardContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(3),
  boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.1), 0px -1px 2px 0px rgba(0,0,0,0.1)",
}));

const noticesData = [
  { id: 1, title: "Notice 1", date: "2024-07-01", publishOn: "2024-07-02", messageTo: ["Student", "Teacher"], description: 'test' },
  { id: 2, title: "Notice 2", date: "2024-07-03", publishOn: "2024-07-04", messageTo: ["Admin"], description: 'test' },
  // Add more sample data here
];

function NoticeBoard() {
  const [notices, setNotices] = useState(noticesData);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    // Handle edit logic
    console.log("Edit Notice ID:", id);
    // Example: Navigate to edit notice page
    navigate(`/edit-notice/${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    setNotices(notices.filter(notice => notice.id !== id));
  };

  const handleAddNotice = () => {
    navigate('/add-notice');
  };

  return (
    <NoticeBoardContainer style={{ marginTop: '100px', marginLeft: '220px' }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h6" style={{ color: "#3d467f" }}>All Notices</Typography>
        <AddNoticeButton variant="contained" onClick={handleAddNotice}>Add Notice</AddNoticeButton>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Notice Date</TableCell>
              <TableCell>Publish On</TableCell>
              <TableCell>Message To</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notices.map((notice) => (
              <TableRow key={notice.id}>
                <TableCell>{notice.title}</TableCell>
                <TableCell>{notice.description}</TableCell>
                <TableCell>{notice.date}</TableCell>
                <TableCell>{notice.publishOn}</TableCell>
                <TableCell>{notice.messageTo.join(", ")}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(notice.id)}><EditIcon /></IconButton>
                  <IconButton onClick={() => handleDelete(notice.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </NoticeBoardContainer>
  );
}

export default NoticeBoard;
