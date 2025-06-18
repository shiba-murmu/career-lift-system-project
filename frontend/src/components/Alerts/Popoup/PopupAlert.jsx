// This is a React component that displays a popup alert dialog.
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from 'react';

function PopupAlert({ message, headingMessage, onClose }) {
    const [open, setOpen] = useState(true);

    const [isDark, setIsDark] = useState(false);

    // ✅ Reset open state whenever message changes
    useEffect(() => {
        if (message) setOpen(true);
    }, [message]);

    const handleClose = () => {
        setOpen(false);
        if (onClose) onClose();  // callback to clear message from parent
    };

    // ✅ Check for dark mode    
    useEffect(() => {
        const checkDarkMode = () => {
            const html = document.documentElement;
            setIsDark(html.classList.contains("dark"));
        };

        checkDarkMode();

        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Dialog
            sx={{
                "& .MuiDialog-paper": {
                    backgroundColor: isDark ? "#171717" : "#ffffff",
                    color: isDark ? "#ffffff" : "#000000",
                },
            }}
            open={open}
            // 🔒 Prevent closing by backdrop click or ESC key
            onClose={(_event, reason) => {
                if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                    setOpen(false);
                    if (onClose) onClose();
                }
            }}
            aria-labelledby="responsive-dialog-title"
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle id="responsive-dialog-title" sx={{ color: isDark ? "#ffffff" : "#000000" }}>
                {headingMessage || "Success"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ color: isDark ? "#ffffff" : "#000000" }}>
                    {message || "Your action was successful!"}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default PopupAlert