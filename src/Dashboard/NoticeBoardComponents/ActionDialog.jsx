import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material'
import { memo } from 'react';

const ActionDialog = (props) => {
    const { open, handleClose, selectedNotice } = props;
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle style={{ backgroundColor: "#6c3ad1", color: "#fff" }}>
                {selectedNotice.title}
            </DialogTitle>
            <DialogContent dividers>
                <p>{selectedNotice.description}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default memo(ActionDialog);