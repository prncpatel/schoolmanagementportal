import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Paper,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('incomplete');
  const [open, setOpen] = useState(false);
  const [newTodo, setNewTodo] = useState({
    id: null,
    title: '',
    description: '',
    CompletedDate: null,
    IsCompleted: false
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    setTodos([
      ...todos,
      {
        ...newTodo,
        id: todos.length + 1,
        CompletedDate: null,
        IsCompleted: false
      }
    ]);
    setNewTodo({
      id: null,
      title: '',
      description: '',
      CompletedDate: null,
      IsCompleted: false
    });
    handleClose();
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, IsCompleted: true, CompletedDate: new Date() } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => todo.IsCompleted === (filter === 'completed'));

  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        backgroundColor: '#fff',
        boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.1), 0px -1px 2px 0px rgba(0,0,0,0.1)',
        width: '100%',
        height: '100%',
        maxHeight: 600
      }}
      component={Paper}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>To Do List</Typography>
        <Button
          variant="contained"
          onClick={handleOpen}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" mb={2}>
        <Button
          variant={filter === 'incomplete' ? 'contained' : 'outlined'}
          onClick={() => setFilter('incomplete')}
          sx={{
            mr: 1,
            backgroundColor: filter === 'incomplete' ? 'primary.main' : 'transparent',
            color: filter === 'incomplete' ? '#fff' : 'primary.main',
            borderColor: 'primary.main'
          }}
        >
          Incomplete
        </Button>
        <Button
          variant={filter === 'completed' ? 'contained' : 'outlined'}
          onClick={() => setFilter('completed')}
          sx={{
            backgroundColor: filter === 'completed' ? 'primary.main' : 'transparent',
            color: filter === 'completed' ? '#fff' : 'primary.main',
            borderColor: 'primary.main'
          }}
        >
          Completed
        </Button>
      </Box>
      <Box flex={1} sx={{ overflowY: 'auto' }}>
        {filteredTodos.length === 0 ? (
          <Typography variant="body1">
            {filter === 'incomplete' ? 'There are no incomplete ToDo items.' : 'There are no completed ToDo items.'}
          </Typography>
        ) : (
          filteredTodos.map((todo) => (
            <Box key={todo.id} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Box>
                <Typography variant="h6" sx={{ color: 'primary.main' }}>{todo.title}</Typography>
                <Typography variant="body2">{todo.description}</Typography>
              </Box>
              {!todo.IsCompleted ? (
                <IconButton onClick={() => handleComplete(todo.id)} color="primary">
                  <RadioButtonUncheckedIcon />
                </IconButton>
              ) : (
                <IconButton disabled>
                  <CheckCircleIcon color="primary" />
                </IconButton>
              )}
            </Box>
          ))
        )}
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: 'primary.main', color: '#fff' }}>Add To Do</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="To Do Title"
            fullWidth
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            value={newTodo.description}
            onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'primary.main' }}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" sx={{ backgroundColor: 'primary.main', color: '#fff' }}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ToDoList;
