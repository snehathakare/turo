import React from "react";
import {API_BASE_URL} from "../../../Constants";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import ClipLoader from "react-spinners/ClipLoader";
import DialogActions from "@material-ui/core/DialogActions";
import Utils from "../../../Utils";

export default function FormDialogTerms(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        e.preventDefault()
        props.changeTermsDialog(true)
    };

    const handleClose = (e) => {
        e.preventDefault()
        props.changeTermsDialog(false)

    };




    let navigateToSignup=()=>{
        props.changeSignupDialog(true)
        props.changeTermsDialog(false)
    }



    return (
        <div>

            <Dialog open={props.termsDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <button onClick={handleClose} className="nav-cross">X</button>

                <div className="login-form">
                    <h2 className="center">Terms and conditions</h2>
                    <div className="scroll">
                        <p>
                            By opening an account on GetACar you hereby confirm and agree to our terms of service:
                            We are not responsible for any of the transactions in the website and the responsibility is solely
                            on the parties involved.
                            We are not providing any insurance of any kind for damages, fraud, or time loss.
                            The purpose of our website is to provide a platform for people who want to create a community of car sharing people.
                            The payments and insurance are only on the end user's responsibility.
                            Thank you.
                        </p>
                    </div>

                </div>

                <DialogActions className="button-stack">


                    <p>
                        <a style={{cursor:'pointer'}} onClick={navigateToSignup}>Back to Signup&nbsp;</a>
                    </p>
                </DialogActions>
            </Dialog>
        </div>
    );



}