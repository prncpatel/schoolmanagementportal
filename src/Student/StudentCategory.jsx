import React, { useState } from 'react';
import { TextField, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StudentCategory = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(['ST', 'SC', 'OBC', 'General', 'Others']);

  const handleAddCategory = () => {
    if (category) {
      setCategories([...categories, category]);
      setCategory('');
    }
  };

  const handleEditCategory = (index) => {
    // Implement edit functionality here
    const newCategory = prompt('Edit Category', categories[index]);
    if (newCategory) {
      const updatedCategories = [...categories];
      updatedCategories[index] = newCategory;
      setCategories(updatedCategories);
    }
  };

  const handleDeleteCategory = (index) => {
    // Implement delete functionality here
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <Box >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 3, boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom>
              Add Student Category
            </Typography>
            <TextField
              label="Type"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddCategory}
              fullWidth
            >
              Save Category
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 3, boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom>
              Student Category List
            </Typography>
            <TextField label="Search" fullWidth sx={{ marginBottom: 2 }} />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>SL</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.map((cat, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{cat}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleEditCategory(index)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteCategory(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentCategory;
