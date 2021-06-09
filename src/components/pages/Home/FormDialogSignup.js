import React from "react";
import {API_BASE_URL} from "../../../Constants";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import ClipLoader from "react-spinners/ClipLoader";

export default function FormDialogSignup(props){
    const [openForm, setOpenForm] = React.useState(false);
    const [confirmPassword,setConfirmPassword] = React.useState("")
    const [errMsg,seterrMsg] = React.useState("")
    const [loading, setLoading] = React.useState(false);
    const [color, setColor] = React.useState("#000");
    const [profile_pic,setprofile_pic] = React.useState(null);
    const profilepic = new FormData()

    const [formData, setFormData] = React.useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: ''
    })

    const { first_name,last_name ,email,phone, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })


    const handleClickOpen = (e) => {
        e.preventDefault()
        props.changeRegisterDialog(true)
    };

    const handleClose = (e) => {
        e.preventDefault()
        props.changeRegisterDialog(false)
        setOpenForm(false)
    };


    let handleConfirmPassword=(event)=>{
        setConfirmPassword(event.target.value)
    }

    let navigateToLogin=()=>{
        props.changeRegisterDialog(false)
        props.changeLoginDialog(true)
    }

    let handleForm=(event)=>{
        setOpenForm(!openForm)
    }

    const signUp=(user)=>{
        seterrMsg('')
        
        let url = `${API_BASE_URL}/user`
        const config = {
            headers: {
                'Content-Type': 'multipart/formdata'
            }
        };

        const {first_name,last_name,email,phone,password} = user
       
        let newUser = {
            first_name:first_name,
            last_name:last_name,
            email:email,
            phone:phone,
            password:password
        }

        if(password == confirmPassword){
            setLoading(true)
            const data = new FormData()
            if(profile_pic)
              data.append("file",profile_pic)
            data.append("user",JSON.stringify(newUser))
         

            axios.post(url,data)
                .then((res)=>{
                    console.log('res',res)
                    setFormData({
                        first_name: '',
                        last_name: '',
                        email: '',
                        phone: '',
                        password: ''
                    })
                    setConfirmPassword('')
                    setLoading(false)
                    seterrMsg('')
                    props.changeRegisterDialog(false)
                    props.changeLoginDialog(true)
                })
                .catch(err => {
                    console.log(err.response)
                    if(err.response.data.response){
                        seterrMsg(err.response.data.response)
                        setLoading(false)

                    }
                    props.changeRegisterDialog(true)
                    props.changeLoginDialog(false)
                })
        }
        else{
            seterrMsg("Both password Fields Should Match")
            props.changeRegisterDialog(true)
            props.changeLoginDialog(false)
        }
    }

    
    const profilepicHandler = (e) => { // take the event as a parameter here
        e.preventDefault(); // Prevent form submission
        profilepic.append("image",profile_pic,profile_pic.name)
        setprofile_pic(null)
        
    }

    return (
        <div>
            <button className="nav-btn" onClick={handleClickOpen}>
                Sign Up
            </button>

            <Dialog open={props.registerDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <button onClick={handleClose} className="nav-cross">X</button>
                <div className="login-form"></div>
                {console.log('kkk',props.registerDialog)}
                <DialogActions className="button-stack">
                    <h2>Welcome to Turo</h2>
                    {errMsg == '' ?
                        <button onClick={handleForm} className="btn-long-transparent">
                            Continue with Email
                        </button> : null
                    }


                    {openForm ?
                        <div >
                            {errMsg && errMsg != '' &&
                            <div className="nav-warning">
                                <p>{errMsg}</p>
                                <CloseIcon className="closeicon" onClick={()=>{seterrMsg("")}}/>
                            </div>
                            }

                            {loading?
                                <div className="nav-clip">
                                    <ClipLoader color={color}  size={150} />
                                </div>
                                :
                                <div className="login-form">
                                  
                                    <span>Upload Profile Picture</span>
                                    <input type='file' 
                                    accept="image/*"
                                    name="file" 
                                    onChange={(e) => setprofile_pic(e.target.files[0])}
                                    />
                                 
                                    <span>First Name</span>
                                    <input
                                        required
                                        placeholder="First Name"
                                        type="text"
                                        name="first_name"
                                        value={first_name}
                                        onChange={e => onChange(e)}
                                    />

                                    <span>Last Name</span>
                                    <input required
                                           placeholder="Last Name"
                                           type="text" name="last_name"
                                           value={last_name}
                                           onChange={e => onChange(e)}
                                    />

                                    <span>Phone</span>
                                    <input required placeholder="Phone"
                                           type="number" name="phone"
                                           value={phone}
                                           onChange={e => onChange(e)}
                                    />

                                    <span>Email</span>
                                    <input required placeholder="Email"
                                           type="email" name="email"
                                           value={email}
                                           onChange={e => onChange(e)}
                                    />

                                    <span>Password</span>
                                    <input required
                                           placeholder="Password"
                                           type="password" name="password"
                                           value={password}
                                           onChange={e => onChange(e)}
                                    />

                                    <span>Confirm Password</span>
                                    <input required placeholder="Confirm Password" type="password"
                                           value={confirmPassword}
                                           name="confirmPassword" onChange={handleConfirmPassword}/>

                                    <button type="submit" onClick={(e)=>{
                                        e.preventDefault()
                                        let user = {
                                            first_name,
                                            last_name,
                                            email,
                                            phone,
                                            password
                                        }
                                        signUp(user)
                                    }} >Register</button>
                                </div>
                            }
                        </div> : null
                    }
                    <p>Already have an account?&nbsp;
                        <a style={{cursor:'pointer'}} onClick={navigateToLogin}>Log in</a>
                    </p>
                </DialogActions>
            </Dialog>
        </div>
    );
}