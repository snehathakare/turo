import React from 'react'
import Footer from '../Home/Footer';
import Nav from '../Home/Nav'
import './profile.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Rating from '@material-ui/lab/Rating';

function UserProfile() {
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <Nav />
            <div className="profile-bg">
                <div className="profile-btn">
                    <button className="profile-primary-btn">Save profile</button>
                    <button className="profile-secondary-btn">Cancel</button>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile-left">
                    <div className="profile-flex-col">
                        <div className="profile-avatar"><AccountCircleIcon style={{ fontSize: 100, color:'rgb(137, 137, 137)'}}/></div>
                        <div className="profile-btn-section">
                            <input accept="image/*" id="icon-button-file" type="file" style={{display:'none'}}/>
                            <label className="profile-primary-btn" htmlFor="icon-button-file">Change profile photo</label>
                            <p className="small-para">Add a face to the name. It’ll help other hosts and guests recognize you at the beginning of a trip.</p>
                        </div>
                    </div>
                    <div className="profile-flex-col">
                        <h1>User</h1>
                        <label className="small-para text-light">LIVES</label>
                        <input className="margin-zero" type="text" placeholder="Boston, MA, Paris, France" />
                        <p className="small-para">Joined May 2021</p>
                    </div>
                    <div>
                        <p className="small-para text-light"><strong>VERIFIED INFO</strong></p>
                        <div className="profile-flex-col">
                            <div className="profile-flex profile-verification">
                                <p>Approved to drive</p>
                                <a href="/">Verify ID</a>
                            </div>
                            <div className="profile-flex profile-verification">
                                <p>Email Address</p>
                                <a href="/"><CheckCircleOutlineIcon /></a>
                            </div>
                            <div className="profile-flex profile-verification">
                                <p>Phone Number</p>
                                <a href="/">Verify Phone Number</a>
                            </div>
                            <div className="profile-flex profile-verification">
                                <p>Facebook</p>
                                <a href="/"><CheckCircleOutlineIcon /></a>
                            </div>
                            <p className="small-para text-light">Build trust with other users on Turo by verifying your contact information.</p>
                        </div>
                    </div>
                    <div className="profile-flex-col text-light">
                        <label className="small-para"><strong>LANGUAGES</strong></label>
                        <input type="text" className="margin-zero"/>
                        <label className="small-para"><strong>WORKS</strong></label>
                        <input type="text" className="margin-zero"/>
                        <label className="small-para"><strong>SCHOOL</strong></label>
                        <input type="text" className="margin-zero"/>
                    </div>
                </div>
                <div className="profile-right">
                    <div>
                        <h4 className="text-light">ABOUT USER</h4>
                        <textarea type="text" className="fullWidth"/>
                        <p className="small-para text-light">Tell hosts and guests about yourself and why you’re a responsible, trustworthy person. Share your favorite travel experiences, your hobbies, your dream car, or your driving experience. Feel free to include links to your LinkedIn, Twitter, or Facebook profiles so they get to know you even better.</p>
                    </div>
                    <div className="reviews text-light">
                        <h4>Reviews from Host</h4>
                        <div className="profile-flex">
                            <PermIdentityIcon style={{ fontSize: 50 }} />
                            <div className="profile-flex-col">
                                <p>
                                    <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    />
                                </p>
                                <p>no reviews yet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex footer-bg">
                <Footer />
            </div>
        </div>
    )
}

export default UserProfile
