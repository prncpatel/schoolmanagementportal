import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Grid,
  InputAdornment,
  TablePagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7c32ff",
    },
    secondary: {
      main: "#03dac6",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const StudentCategory = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([
    "ST",
    "SC",
    "OBC",
    "General",
    "others",
    "open",
    "pp",
    "ppppp",
    "ppppp",
    "p",
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleAddCategory = () => {
    if (category) {
      setCategories([...categories, category]);
      setCategory("");
    }
  };

  const handleEditCategory = (index) => {
    const newCategory = prompt("Edit Category", categories[index]);
    if (newCategory) {
      const updatedCategories = [...categories];
      updatedCategories[index] = newCategory;
      setCategories(updatedCategories);
    }
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ padding: 2, boxShadow: 2 }}>
            <Typography variant="body1" sx={{ color: "#333", marginBottom: 2 }}>
              Add Student Category
            </Typography>
            <TextField
              label="Type"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
              required
              size="small"
              sx={{ marginBottom: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                fontSize: "0.9rem",
                padding: "6px 12px",
              }}
              onClick={handleAddCategory}
              fullWidth
            >
              Save Category
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper sx={{ padding: 2, boxShadow: 2 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Typography variant="body1" gutterBottom sx={{ color: "#333" }}>
                Student Category List
              </Typography>
              <TextField
                label="Search"
                size="small"
                sx={{ marginBottom: 1, maxWidth: 200 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        color: "#333",
                        fontSize: "0.9rem",
                      }}
                    >
                      SL
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        color: "#333",
                        fontSize: "0.9rem",
                      }}
                    >
                      Category
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        color: "#333",
                        fontSize: "0.9rem",
                      }}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((cat, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ fontSize: "0.9rem" }}>
                          {page * rowsPerPage + index + 1}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.9rem" }}>{cat}</TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            sx={{
                              textTransform: "none",
                              fontSize: "0.8rem",
                              padding: "2px 8px",
                              marginRight: 1,
                            }}
                            endIcon={<ArrowDropDownIcon />}
                          >
                            Select
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={categories.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{ borderTop: "1px solid #e0e0e0" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default StudentCategory;
