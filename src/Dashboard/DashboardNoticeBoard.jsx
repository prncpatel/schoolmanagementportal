import React, { lazy, memo, Suspense, useCallback, useMemo, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import dayjs from "dayjs";
const ActionDialog = lazy(()=> import("./NoticeBoardComponents/ActionDialog"));

const DashboardNoticeBoard = ({ notices }) => {
  const memoizedNotices = useMemo(() => notices, [notices]);
  const [open, setOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const handleViewClick = useCallback((notice) => {
    setSelectedNotice(notice);
    setOpen(true);
  },[]);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSelectedNotice(null);
  },[]);;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Stack variant="body1">Notice Board</Stack>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("Add functionality here")}
        >
          + ADD
        </Button>
      </div>
      <Table style={{ border: "1px solid #e0e0e0" }}>
        <TableHead style={{ backgroundColor: "#f5f5f5" }}>
          <TableRow>
            <TableCell>
              <Typography variant="body1">
                DATE
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">
                TITLE
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">
                ACTIONS
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memoizedNotices.map((notice, index) => (
            <TableRow key={index}>
              <TableCell>{dayjs(notice.date).format("YYYY-MM-DD")}</TableCell>
              <TableCell>{notice.title}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleViewClick(notice)}>
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedNotice && (
        <Suspense fallback={<div>loading...</div>}>
          <ActionDialog open={open} handleClose={handleClose} selectedNotice={selectedNotice} />
        </Suspense>
      )}
    </div>
  );
};

export default memo(DashboardNoticeBoard);
