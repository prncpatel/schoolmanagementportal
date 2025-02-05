import React, { useState, useRef, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Typography,
  Grid,
  Button,
  CssBaseline,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Divider,
  Tabs,
  Tab
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

// Function to get MIME type from file name
const getMimeType = (fileName) => {
  const extension = fileName.split(".").pop().toLowerCase();
  switch (extension) {
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return "image";
    case "pdf":
      return "application";
    case "zip":
    case "rar":
      return "compressed";
    default:
      return "default";
  }
};

// SharedInput component
const SharedInput = ({ field }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const renderSelectedFilePreview = () => {
    if (!selectedFile) return null;

    const mimeType = getMimeType(selectedFile.name);

    switch (mimeType) {
      case "image":
        return (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt={selectedFile.name}
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              borderRadius: "4px",
            }}
          />
        );
      case "application":
        return <InsertDriveFileIcon />;
      case "compressed":
        return <InsertDriveFileIcon />;
      default:
        return <InsertDriveFileIcon />;
    }
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      {field.type === "file" && (
        <>
          <Button variant="contained" component="label">
            {field.label}
            <input
              type="file"
              hidden
              onChange={handleFileChange}
              name={field.name}
            />
          </Button>
          {selectedFile && (
            <Box display="flex" alignItems="center" mt={1}>
              <Typography variant="body2" color="textSecondary" sx={{ mr: 1 }}>
                {selectedFile.name}
              </Typography>
              {renderSelectedFilePreview()}
            </Box>
          )}
        </>
      )}
      {["text", "email", "date", "number", "select"].includes(field.type) && (
        <>
          {field.type === "select" ? (
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>{field.label}</InputLabel>
              <Select
                label={field.label}
                name={field.name}
                required={field.required}
              >
                {field.options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <TextField
              fullWidth
              variant="outlined"
              label={field.label}
              name={field.name}
              type={field.type}
              required={field.required}
              size="small"
              InputLabelProps={{
                shrink: true, // Ensure the label doesn't overlap the input field
              }}
              InputProps={{
                placeholder: "", // Clear the default placeholder
                onClick: (event) => {
                  event.target.placeholder = '';
                },
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

// Field configuration (unchanged)

const fieldsConfig = [
  {
    tab: "Personal Info",
    fields: [
      { label: "First Name", name: "firstName", type: "text", required: true },
      { label: "Last Name", name: "lastName", type: "text", required: true },
      {
        label: "Gender",
        name: "gender",
        type: "select",
        options: ["Male", "Female", "Other"],
        required: true,
      },
      { label: "Date of Birth", name: "dob", type: "date", required: true },
      { label: "Religion", name: "religion", type: "text" },
      { label: "Caste", name: "caste", type: "text" },
      { label: "Student Photo", name: "studentPhoto", type: "file" },
      { label: "Email Address", name: "email", type: "email", required: true },
      { label: "Phone Number", name: "phone", type: "text", required: true },
      { label: "Current Address", name: "currentAddress", type: "text" },
      { label: "Permanent Address", name: "permanentAddress", type: "text" },
      {
        label: "Blood Group",
        name: "bloodGroup",
        type: "select",
        options: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      },
      {
        label: "Category",
        name: "category",
        type: "select",
        options: ["General", "OBC", "SC", "ST"],
      },
      { label: "Height (in)", name: "height", type: "number" },
      { label: "Weight (kg)", name: "weight", type: "number" },
    ],
  },
  {
    tab: "Parents & Guardian Info",
    fields: [
      { label: "Mother Name", name: "motherName", type: "text" },
      { label: "Occupation", name: "motherOccupation", type: "text" },
      { label: "Mother Phone", name: "motherPhone", type: "text" },
      { label: "Mother Photo", name: "motherPhoto", type: "file" },
      {
        label: "Relation with Guardian",
        name: "relationWithGuardian",
        type: "radio",
        options: ["Father", "Mother", "Others"],
      },
      { label: "Guardian Name", name: "guardianName", type: "text" },
      { label: "Guardian Relation", name: "guardianRelation", type: "text" },
      {
        label: "Guardian Email",
        name: "guardianEmail",
        type: "email",
        required: true,
      },
      { label: "Guardian Photo", name: "guardianPhoto", type: "file" },
      { label: "Guardian Phone", name: "guardianPhone", type: "text" },
      {
        label: "Guardian Occupation",
        name: "guardianOccupation",
        type: "text",
      },
      { label: "Guardian Address", name: "guardianAddress", type: "text" },
    ],
  },
  {
    tab: "Document Info",
    fields: [
      {
        label: "Document Type",
        name: "documentType",
        type: "select",
        options: ["Passport", "Visa", "ID Card"],
      },
      { label: "Document Number", name: "documentNumber", type: "text" },
    ],
  },
  {
    tab: "Previous School Information",
    fields: [
      { label: "School Name", name: "schoolName", type: "text" },
      { label: "Class", name: "class", type: "text" },
      { label: "Year of Passing", name: "yearOfPassing", type: "number" },
    ],
  },
  {
    tab: "Other Info",
    fields: [
      { label: "Hobbies", name: "hobbies", type: "text" },
      { label: "Skills", name: "skills", type: "text" },
    ],
  },
  {
    tab: "Custom Field",
    fields: [
      { label: "Custom Field 1", name: "customField1", type: "text" },
      { label: "Custom Field 2", name: "customField2", type: "text" },
    ],
  },
  {
    tab: "Custom Field",
    fields: [
      { label: "Custom Field 1", name: "customField1", type: "text" },
      { label: "Custom Field 2", name: "customField2", type: "text" },
    ],
  },
  {
    tab: "Custom Field",
    fields: [
      { label: "Custom Field 1", name: "customField1", type: "text" },
      { label: "Custom Field 2", name: "customField2", type: "text" },
    ],
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#6200ea",
    },
    secondary: {
      main: "#03dac6",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const AddStudentForm = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabsRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const momentumID = useRef(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - tabsRef.current.offsetLeft;
    scrollLeft.current = tabsRef.current.scrollLeft;
    velocity.current = 0;

    if (momentumID.current) {
      cancelAnimationFrame(momentumID.current);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - tabsRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    velocity.current = walk - (tabsRef.current.scrollLeft - scrollLeft.current);
    tabsRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    applyMomentum();
  };

  const applyMomentum = () => {
    if (Math.abs(velocity.current) > 0.5) {
      tabsRef.current.scrollLeft -= velocity.current;
      velocity.current *= 0.95; // Friction effect
      momentumID.current = requestAnimationFrame(applyMomentum);
    }
  };

  // Ensure selected tab is fully visible
  useEffect(() => {
    const tabList = tabsRef.current;
    if (!tabList) return;

    const selectedTab = tabList.querySelector(".Mui-selected");
    if (selectedTab) {
      const tabLeft = selectedTab.offsetLeft;
      const tabWidth = selectedTab.offsetWidth;
      const containerScrollLeft = tabList.scrollLeft;
      const containerWidth = tabList.clientWidth;

      if (tabLeft < containerScrollLeft) {
        // Scroll left if tab is partially hidden on the left
        tabList.scrollTo({ left: tabLeft, behavior: "smooth" });
      } else if (tabLeft + tabWidth > containerScrollLeft + containerWidth) {
        // Scroll right if tab is partially hidden on the right
        tabList.scrollTo({ left: tabLeft + tabWidth - containerWidth, behavior: "smooth" });
      }
    }
  }, [selectedTab]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Typography variant="h6" gutterBottom>
          Student Admission
        </Typography>
        <Box p={4} sx={{ backgroundColor: "#fff", borderRadius: "8px" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="body1">Add Student</Typography>
            <Button variant="outlined" color="primary">
              Import Student
            </Button>
          </Box>
          <Box
            ref={tabsRef}
            sx={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              cursor: "grab",
              display: "flex",
              "&::-webkit-scrollbar": { display: "none" },
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="student admission tabs"
              variant="scrollable"
              scrollButtons={false}
              sx={{ minWidth: "100%", flexShrink: 0,"& .MuiTabs-indicator": {
                  display: "none",
                },
                "& .Mui-selected": {
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                  color: theme.palette.primary.main,
                } }}
            >
              {fieldsConfig.map((tab, index) => (
                <Tab key={index} label={tab.tab} />
              ))}
            </Tabs>
          </Box>
          <Divider sx={{ my: 2 }} />
          {fieldsConfig[selectedTab].fields.length > 0 && (
            <form noValidate autoComplete="off">
              <Typography variant="h6" gutterBottom>
                {fieldsConfig[selectedTab].tab}
              </Typography>
              <Grid container spacing={3}>
                {fieldsConfig[selectedTab].fields.map((field) => (
                  <Grid item xs={12} sm={6} md={4} key={field.name}>
                    <SharedInput field={field} />
                  </Grid>
                ))}
              </Grid>
              <Box mt={4}>
                <Button variant="contained" color="primary" type="submit">
                  Save {fieldsConfig[selectedTab].tab}
                </Button>
              </Box>
            </form>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AddStudentForm;
