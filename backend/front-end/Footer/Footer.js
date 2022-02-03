import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={require ("../../../assets/Home/shape-bg.png").default} alt="no internet conection" />
            </div>
        </div>
    )
}

export default Footer
