import React, { useState } from 'react'
import axios from 'axios';
import upwork22 from "../../assets/Home/upwork22.png"
import "./ContactMe.css";



const ContactMe = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendMail = async e => {
        e.preventDefault();
        const { data } = await axios.post("http://localhost:4000", {
            name,
            email,
            message
        });
        console.log(data)
    }

    return (
        <div className='main-container fade-in' id="Contact Me" style={{ opacity: "5", transform: "translateY(1px)" }} >
            <div className="heading-container">
                <div className="screen-heading">
                    <span>Contact Me</span>
                </div>
                <div className="screen-sub-heading">
                    <span>My contact details</span>
                </div>
                <div className="heading-seperator">
                    <div className="seperator-line">
                    </div>
                    <div className="seperator-blob">
                        <div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="central-form">
                <div className="col">
                    <h2 className="title">
                        <p className="styles_typicalWrapper__1_Uvh">Get In Touch 📧</p>
                    </h2>
                    <a href='https://github.com/fawadshahzada' target="_blank">
                        <i class="fa fa-github-square"></i>
                    </a>
                    <a href='https://www.upwork.com/freelancers/~012d12818c40e43a42' target="_blank">
                        <i className='logo'><img src={upwork22} alt='upwork' className='logo' /></i>
                    </a>
                    <a href='https://www.linkedin.com/in/akbar-khan-a98547230/' target="_blank">
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a href='https://stackoverflow.com/users/18078020/akbar-khan' target="_blank">
                        <i class="fa fa-stack-overflow"></i>
                    </a>
                    <a href='https://www.reddit.com/user/Akabrkhan' target="_blank">
                        <i className='fa fa-reddit'></i>
                    </a>
                </div>

                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={require("../../assets/Home/mailz.jpeg").default} alt="image not found" />
                    </div>
                    <form onSubmit={sendMail}>
                        <p></p>
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={e => setName(e.target.value)} />
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="message">Message</label>
                        <textarea type="text" onChange={e => setMessage(e.target.value)}></textarea>
                        <div className="send-btn">
                            <button type="submit">send<i className="fa fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>



            <div className="scroll-container">
                <button className="btn-scroll" onClick={() => {
                    const element = document.getElementById(`Home`);
                    element.scrollIntoView({ behavior: "smooth" });
                }}>
                    <i className="fa fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}

export default ContactMe;
