import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Stack } from '@mui/material';
import { Visibility as VisibilityIcon } from '@mui/icons-material';
import moment from 'moment';

const DashboardNoticeBoard = ({ notices }) => {
    const [open, setOpen] = useState(false);
    const [selectedNotice, setSelectedNotice] = useState(null);

    const handleViewClick = (notice) => {
        setSelectedNotice(notice);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedNotice(null);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <Stack variant="body1">Notice Board</Stack>
                <Button variant="contained" color="primary" onClick={() => alert('Add functionality here')}>+ ADD</Button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>DATE</TableCell>
                        <TableCell>TITLE</TableCell>
                        <TableCell>ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notices.map((notice, index) => (
                        <TableRow key={index}>
                            <TableCell>{moment(notice.date).format('YYYY-MM-DD')}</TableCell>
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
                <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                    <DialogTitle style={{ backgroundColor: '#6c3ad1', color: '#fff' }}>
                        {selectedNotice.title}
                    </DialogTitle>
                    <DialogContent dividers>
                        <p>{selectedNotice.description}</p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default DashboardNoticeBoard;
