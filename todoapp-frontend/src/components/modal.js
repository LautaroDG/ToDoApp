import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, Stack, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #C2C2C2',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({saveFunction, Icon, ModalTitle, ButtonColor, inputLabel}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = React.useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <IconButton aria-label="add" onClick={handleOpen}>
        <Icon style={{color: ButtonColor}} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginTop: "-1em", marginBottom: ".5em"}}>
            {ModalTitle}
          </Typography>
          <TextField
            id="standard-basic" label={inputLabel} variant="standard"
            value={inputValue}
            onChange={handleChange}
            style={{width: "100%", magin: "0"}}
          />
          <Stack direction="row" spacing={2} style={{display: "flex", flexDirection: "row-reverse", marginBottom: "-1em", marginTop: "1em"}}> 
            
            <Button 
              variant="contained" 
              size="small" 
              style={{marginLeft: ".5em"}} 
              onClick={() => {
                saveFunction(inputValue)
                setInputValue('')
                handleClose()
              }}
            >
              Confirm
            </Button>

            <Button color='error' variant="outlined" size="small" onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}