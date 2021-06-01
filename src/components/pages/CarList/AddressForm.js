import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

export default function AddressForm() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = (e) => {
      e.preventDefault()
      setOpen(true);
    };
  
    const handleClose = (e) => {
      e.preventDefault()
      setOpen(false);
    };
  
    return (
      <div>
        <button onClick={handleClickOpen} className="btn-listing">
          Next
        </button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <button onClick={handleClose} className="nav-cross">X</button>
          <div className="login-form">
            <h2 className="center">Address</h2>
            <span>Please enter a specific location</span>
            <span>Country</span>
            <input type="text" placeholder="country" />
            <span>Street Address</span>
            <input type="text" placeholder="street" />
            <span>City</span>
            <input type="text" placeholder="city" />
            <span>Zip code/ Postal code</span>
            <input type="text" placeholder="zipcode" />
          </div>
          <DialogActions className="button-stack">
            <button onClick={handleClose} className="btn-long">
              Next
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
}