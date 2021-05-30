import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './nav.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Nav() {
    return (
        <header className="nav">
            <div className="nav-left-link">
                <div className="logo"><a href="/">TURO</a></div>
            </div>
            <div className="nav-right-links">
                <a href="/">Become a host</a>
                <div className="nav-dropdown">
                    <a href="/">Learn More</a>
                    <ul className="dropdown-content">
                        <li>How Turo works</li>
                        <li>Insurance & Protection</li>
                        <li>Carculator</li>
                        <li>Host Tools</li>
                    </ul>
                </div>
                <FormDialogLogin />
                <FormDialogSignUp />
                
                <PersonOutlineIcon/>
            </div>
        </header>
    )
}

function FormDialogLogin() {
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
        <button onClick={handleClickOpen} className="nav-btn">
          <strong>Log in</strong>
        </button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <button onClick={handleClose} className="nav-cross">X</button>
          <div className="login-form">
            <h2 className="center">Welcome Back</h2>
            <span>Email</span>
            <input type="email" placeholder="Email" />
            <span>Password</span>
            <input type="password" placeholder="Password" />
          </div>
          <DialogActions className="button-stack">
            <button onClick={handleClose} className="btn-long">
              Login
            </button>
            <h5>or</h5>
            <button onClick={handleClose} className="btn-long-transparent">
                Continue with Apple
            </button>
            <button onClick={handleClose} className="btn-long-transparent">
                Continue with Google
            </button>
            <button onClick={handleClose} className="btn-long-transparent">
                Continue with Facebook
            </button>
            <p>Don't have an account?&nbsp;
                <a href="/">Sign up</a>
            </p>
            
          </DialogActions>
        </Dialog>
      </div>
    );
}

function FormDialogSignUp() {
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
        <button className="nav-btn" onClick={handleClickOpen}>
          <strong>Sign Up</strong>
        </button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <button onClick={handleClose} className="nav-cross">X</button>
          <div className="login-form"></div>
          <DialogActions className="button-stack">
            <h2>Welcome to Turo</h2>
            <button onClick={handleClose} className="btn-long-transparent">
                Continue with Apple
            </button>
            <button onClick={handleClose} className="btn-long-transparent">
                Continue with Google
            </button>
            <button onClick={handleClose} className="btn-long-transparent">
                Continue with Facebook
            </button>
            <button onClick={handleClose} className="btn-long-transparent">
                Continue with Email
            </button>
            <p>Already have an account?&nbsp;
                <a href="/">Log in</a>
            </p>
            
          </DialogActions>
        </Dialog>
      </div>
    );
}
