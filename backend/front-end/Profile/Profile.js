import React from 'react'
import Typical from "react-typical";
import index from '../../Navbar';
import upwork22 from "../../../assets/Home/upwork22.png"
import "./Profile.css";

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://github.com/fawadshahzada' target="_blank">
                                <i class="fa fa-github-square"></i>
                            </a>
                            <a href='https://www.upwork.com/freelancers/~0146babc244aca06b2' target="_blank">
                                <i><img src={upwork22} alt='upwork' className='logo' /></i>
                            </a>
                            <a href='https://www.linkedin.com/in/fawad-khan-00993b155/' target="_blank">
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://stackoverflow.com/users/11139369/fawadshahzada' target="_blank">
                                <i class="fa fa-stack-overflow"></i>
                            </a>
                            <a href='https://www.reddit.com/user/fawadshahzad/' target="_blank">
                                <i className='fa fa-reddit'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hi, I am <span className='highlighted-text'>Fawad</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "QA Automation Engineer", 1200,
                                        "QA Manual Tester", 1200,
                                        "ReactJS Developer", 1200,
                                        "MERN Stack Developer", 1200,
                                        "Cross Platform v", 1200,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' onClick={() => {
                            const element = document.getElementById(`Contact Me`);
                            element.scrollIntoView({ behavior: "smooth" });
                        }}>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='my-resume.pdf' download='my-resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
