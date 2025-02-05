import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, Select, InputLabel, FormControl, Checkbox, ListItemText, OutlinedInput } from '@mui/material';
import { styled } from '@mui/system';
import moment from 'moment';

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: '#6c3ad1',
  color: '#fff',
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const SaveButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: '#6c3ad1',
  color: '#fff',
}));

const roles = ['Parent', 'Receptionist', 'Teacher', 'Student'];

const AddEventDialog = ({ open, onClose, selectedDate, onSave }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleSave = () => {
    const newEvent = {
      id: new Date().getTime(), // Unique ID for the event
      title,
      start: selectedDate,
      end: selectedDate,
      location,
      roles: selectedRoles,
      description,
      url,
    };
    onSave(newEvent);
    onClose();
  };

  const handleRoleChange = (event) => {
    setSelectedRoles(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitleStyled>
        Add Event ({moment(selectedDate).format('dddd, MM-DD-YYYY')})
      </DialogTitleStyled>
      <DialogContent style={{paddingTop:'1rem'}}>
        <TextFieldStyled
          label="Event Title"
          variant="outlined"
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextFieldStyled
          label="Event Location"
          variant="outlined"
          fullWidth
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <FormControlStyled variant="outlined">
          <InputLabel>Role</InputLabel>
          <Select
            multiple
            value={selectedRoles}
            onChange={handleRoleChange}
            input={<OutlinedInput label="Role" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                <Checkbox checked={selectedRoles.indexOf(role) > -1} />
                <ListItemText primary={role} />
              </MenuItem>
            ))}
          </Select>
        </FormControlStyled>
        <TextFieldStyled
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextFieldStyled
          label="URL"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <SaveButtonStyled onClick={handleSave}>Save</SaveButtonStyled>
      </DialogActions>
    </Dialog>
  );
};

export default AddEventDialog;
