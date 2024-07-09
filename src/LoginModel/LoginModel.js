import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginModel({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open} timeout={600}>
          <Box
            sx={{
              position: 'absolute',
              top: '40%',
              left: '70%',
              width: '470px',
              backgroundColor: '#fff',
              boxShadow:
                '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)',

              transform: 'translate(-50%, -50%)',
            }}
          >
            <Paper sx={{ width: '100%', boxShadow: 'none' }}>
              <MenuList dense>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  <h5> Offline Account Process </h5>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </div>
                <Divider />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '16px',
                    flexDirection: 'column',
                  }}
                >
                  <div>
                    <p>
                      Please contact <b>+91 7667273344</b> for getting offline
                      KYC process.
                    </p>
                    <p>
                      <a
                        style={{ textDecoration: 'none', color: '#34a853' }}
                        href="https://adityatrading.in/media/forms/Individual-Account-Opening-Form.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here
                      </a>
                      to download offline KYC form.
                    </p>
                  </div>
                </div>
              </MenuList>
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
