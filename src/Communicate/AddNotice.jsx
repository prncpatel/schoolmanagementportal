import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  Paper,
  Container,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const AddNoticeContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  boxShadow: 'none',
  width: "100%",
  maxWidth: "100%",
}));

const SaveButtonContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#f0f0f0", // light background color
  padding: theme.spacing(2),
  textAlign: 'left', // align button to the left
}));

const SaveButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7a33ff", // your color
  color: "#fff",
  '&:hover': {
    backgroundColor: "#5a23cc", // darker shade of your color
  }
}));

const messageToOptions = [
  "Super admin",
  "Student",
  "Teacher",
  "Admin",
  "Accountant",
  "Receptionist",
  "Librarian",
  "Driver"
];

function AddNotice() {
  const [notice, setNotice] = useState({
    title: "",
    notice: "",
    noticeDate: "",
    publishOn: "",
    messageTo: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setNotice((prevNotice) => {
        if (checked) {
          return { ...prevNotice, messageTo: [...prevNotice.messageTo, value] };
        } else {
          return { ...prevNotice, messageTo: prevNotice.messageTo.filter((role) => role !== value) };
        }
      });
    } else {
      setNotice((prevNotice) => ({ ...prevNotice, [name]: value }));
    }
  };

  const handleSave = () => {
    // Handle save logic
    console.log("Saved Notice:", notice);
    // Reset form fields after saving
    setNotice({
        title: "",
        notice: "",
        noticeDate: "",
        publishOn: "",
        messageTo: []
      });
  };

  return (
    <Container style={{ marginTop: '100px', marginLeft: '200px' }}>
      <Typography variant="h6" style={{ color: "#3d467f", marginBottom: "1rem" }}>Add Notice</Typography>
      <AddNoticeContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Title"
                name="title"
                value={notice.title}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Notice"
                name="notice"
                value={notice.notice}
                onChange={handleChange}
                required
                multiline
                rows={4}
                fullWidth
              />
              <Box display="flex" justifyContent="space-between" gap={2}>
                <TextField
                  label="Notice Date"
                  name="noticeDate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={notice.noticeDate}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Publish On"
                  name="publishOn"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={notice.publishOn}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Message To</FormLabel>
              <FormGroup>
                {messageToOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={notice.messageTo.includes(option)}
                        onChange={handleChange}
                        name="messageTo"
                        value={option}
                      />
                    }
                    label={option}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </AddNoticeContainer>
      <SaveButtonContainer>
        <SaveButton variant="contained" onClick={handleSave}>Save Content</SaveButton>
      </SaveButtonContainer>
    </Container>
  );
}

export default AddNotice;
